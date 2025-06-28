import "./App.css";
import RandomUser from "./Components/RandomUser.jsx";
import { useEffect, useState } from "react";
import { SearchData } from "./Components/SearchData.jsx";

function App() {
  const [userData, setUserData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const dataFetch = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/?results=50");
      const data = await res.json();
      setUserData(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);

  // Filter logic:
  const filteredUsers = userData.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
    return fullName.includes(searchText.toLowerCase());
  });

  return (
    <div>
      <SearchData searchText={searchText} setSearchText={setSearchText} />

      <div className="app-main">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <RandomUser key={index} userData={user} />
          ))
        ) : (
          <h3 style={{ margin: "20px auto" }}>No users found</h3>
        )}
      </div>
    </div>
  );
}

export default App;
