import React from "react";

class AboutChildClass extends React.Component {

    constructor(props){
        super(props);


        this.state={
            userInfo:{
                name:"dammy krishna",
                location:"india"
            }
        }
        
        // console.log(this.state.userInfo) 
        
        
    }
        // api call using class method
    async componentDidMount(){
    const data = await fetch('https://randomuser.me/api/');
    const json = await data.json();
    console.log(json.results[0]);
 
    const { name, location } = json.results[0];

  this.setState({
    userInfo: {
      name: `${name.first} ${name.last}`,
      location: location.country
    }
  });
}
    render(){
     

      // disstucture our state which is userInfo
      const { name, location } = this.state.userInfo;

      return (
        <div className="aboutchildclassContainer">
          <h1>this is about class child </h1>
          <h3>here we use props data: {this.props.name}</h3>
          <div className="information">
            <h2>name : {name} </h2>
            <h2>Location :{location} </h2>
          </div>
        </div>
      );
    }



}

export default AboutChildClass