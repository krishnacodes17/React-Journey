# class  based component 

-     -   class <classname> extends React.Componet{

      render(){
        return(
             <h1> this is class based component</h1>
        )
       
        }
      }  
      export default <classname>

- here class is a keyword and classname is the name of the class. which is extand inside react component

- after than its render method  inside we return our jsx  

## props 
 - we can pass props same as a function method  but that props we can take as a perameter  inside component  
 - now here we accept props with help of constructor and inside constructor we use superkeyword and inside we use props 

 -      import React from 'react';
         class ClassBased extends React.Component{
         constructor(props){
           super(props)
           console.log(props)
         }
         render(){

           return(
                <h1> this is class based component</h1>
           )
          
           }
         }  
         export default ClassBased



## how we use useState inside our class based component 

-  our super(); keyword we can decleare our usestae using <this.state ={ //here er decleare your state}>

-           constructor (props){
            super(props);
            this.state ={
              count:0 ,    //here we create our first state
              count1: 1 ,   // here we create our second state
            }
           }

- how to use our state value 
 -      this.state.<state name value>
           eg : this.state.count  // here we use our first state value

- we can also extract our props value inside our state value 
 -     const {<extract value>} = this.state
        const {name} = this.state




##  how to set our useState value 

-           <button onClick={()=>{
          this.setState({
            count: this.state.count + 1 ,
          })
         }} >increase value</button>


- we can click on button than we take function than set our value  using this.setState() method  we can also inside same setState inside we can multiple update setState value

-           <button onClick={()=>{
          this.setState({
            count: this.state.count + 1 ,
            count1: this.state.count1 + 1 ,
          })
         }} >increase value</button>

- when we set any value of useState value than its render and only make changes in that usestae which is mention for changes  


## componentDidMount() method  
- this is used to call api 

- componentDidMount() method  is run first we render our contructor function than we run render() aftrer than we run componentDidMount() method  

- eg :  suppose you have a parents components and inside we render two child component rander that situation how componentDidMount() method   is render 
 -      - Parent Constructor
               - Parent render               
          • First Constructor
               - First Render
               - Second Constructor
               - Second Render
               UPDATED
               - IN SINGLE BATCH.
               - First ComponentDidNoun
          • Second ConponentDidYOunt
               - Parent ComponentDidMount



| Phase   | Class Component Method   | Function Component (Hooks)                 |
| ------- | ------------------------ | ------------------------------------------ |
| Mount   | `componentDidMount()`    | `useEffect(() => {}, [])`                  |
| Update  | `componentDidUpdate()`   | `useEffect(() => {}, [dep])`               |
| Unmount | `componentWillUnmount()` | `useEffect(() => { return () => {} }, [])` |
