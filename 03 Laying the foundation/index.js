import react from "react";
import React from "react";
import ReactDom from "react-dom/client"

// react element
// when we doing this React.createElement its create  a object and then when we reander this object its create a html

const heading = React.createElement("h1", {id: "heading"},"hellow react")
const root = ReactDom.createRoot(document.getElementById("root"))
root.render(heading)




const jsxHeading = <h1>hellow babu padhai karo acche se</h1>;   // this is jsx syntex to write h1 tag
console.log(jsxHeading)    // here jsx is also same as react
console.log(heading)

const nav = react.createElement("div",{id:"nav"}, react.createElement("h1",{},"this is react series"))
root.render(nav)
root.render(jsxHeading)



// jsx

const headingofJSX =  <h2 className="jsxHeading" >this is JSX heading </h2>
const headingofjsx = <h3 id="jsxid">heading of JSX</h3>
root.render(headingofJSX)



// react component

//  react functional component
const FunctionalComponent = ()=>{
    return <h1>Hellow this is our functional component</h1>
}

const NormalFunctionCompomnent = function (){
    return <h3>this is normal function and here we need to use return keyword</h3>
}

const FunctionalComp = ()=> <h1> here we not use return keyword because we write in single line  </h1>



const Functionalbracketcomp = ()=> (
   <>
       <FunctionalComponent/>
       <FunctionalComp />
       <h1>here we use bracket to wrap our code </h1>
       <NormalFunctionCompomnent/>
       <Curly/>
       <FunctioncallsyntexOfJSX/>
    </>
)

root.render(<Functionalbracketcomp />)


// curly bracket {}

const Curly = function (){
    const vari = 1000;
    const spa = <span>this span use in our curly</span>
    return <> 
       <h2>in this h2 tag we use some js variable {vari} {spa}  </h2>
       {FunctioncallsyntexOfJSX()}   // here we use this component as a normal function call
       <NormalFunctionCompomnent/>
       <FunctionalComp></FunctionalComp>
    </> 
    
}

const FunctioncallsyntexOfJSX = ()=>{
    return <h2> this is use as a call like a function </h2>
}