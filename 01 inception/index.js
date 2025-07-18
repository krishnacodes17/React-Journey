//  first element in react 

const heading = React.createElement(
  "h1",                                      // what tag we create 
  { },                                     // here we mention id , class, style etc
  "Hello World from React"               // what we want to display
);



//  here we create a root and inside root we rander our heading
const root =  ReactDOM.createRoot(document.getElementById("root"))
root.render(heading); 


const heading2 = React.createElement( "h1" ,{id : "heading2"} , "this is our heading 2")
console.log(heading2)             // here we get an object 

root.render(heading2)                        // here render method help to keep that object and convert into h1 tag and put inside root 











// now create this  structure 

// <div id="parents">
//     <div class="child">
//         <h1>hellow h1 tag</h1>
        
//     </div>
// </div> 

// const parents = React.createElement("div", {id: "parents"}, React.createElement("div", {id: "child"} , React.createElement("h1" , {} , "hellow this is h1 tag") ));
// console.log(parents)
// root.render(parents); 










// now create this  structure 

// <div id="parents">
//     <div class="child">
//         <h1>hellow h1 tag</h1>
//         <h2>this is our h2 tag</h2>
//     </div>
// </div> 


const parents = React.createElement("div", {id: "parents"}, React.createElement("div", {id:"child"} , 
     [ React.createElement("h1" , {} , "hellow this is h1 tag") ,
       React.createElement("h2" , {} , "hellow this is h2 tag") 
     ]
     ));

console.log(parents)
root.render(parents); 