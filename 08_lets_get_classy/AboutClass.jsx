
import React   from "react";
import AboutChildClass from "./AboutChildClass";

class AboutClass extends React.Component{


  // create a usestate in class based component
   constructor (props){
    super(props);
    this.state ={
      count:0 ,    //here we create our first state
      count1: 1 ,   // here we create our second state
    }
   }

   
  render(){

     const { count1} = this.state; // here we destructure our state
    return (
      <div className="aboutCard">
        {/* // here we use our usestate  */}
        <h1>{this.state.count}</h1>
        {/* here we distructure count1 value from state */}
         <h2>{count1}</h2>
         <button onClick={()=>{
           this.setState({
             count: this.state.count + 1,
             count1: this.state.count1 + 1,
           });
         }} >increase value</button>
        <h2>Name : Krishna</h2>
        <h2>Location : gujart</h2>
        <h2>contect : 9537452145</h2>

        <AboutChildClass  name="krishna" />
      </div>

      
    );
  }

}

export default AboutClass;