# sceipt 
- script is most important to keep our sortcut to run our script
- let's create a script
-      "start":"parcel index.html"
-  - this script help to start our html file
-       "bild": "parcel build index.html"
- - this script help to build our html file

## how to use script (how run script) 
- npm run < script name>
-  -  eg : npm run start

## Advantage of script
- its's help to run our code  just write a shortcut where we write to run our code < npx parcel index.js> we just write < npm run start > to run our code 

## some important point to remember
- jsx is not html its look like html / xml
- react element is object 
- jsx is different react is different 
- both react and jsx run with root.render(< what you render >)
- react is not devloper frienly so facebook devloper build jsx which is looking similer to html and devloper friendly
- js engin understand (es6) which called ECMAscript
- const jsxHeading = <h1>hellow babu padhai karo acche se</h1>; this is not jsx code when we write this code that time parcel traspiled (converted) understand our browser  and this process is doing "bable"
- 


## working of jsx
- jsx code convert into react.createElement -> react.createElement -> (object) js => HTMLElement(render)
- when we give any class inside jsx that time we use "ClassName" as a "class"  and use camelCase
- when we write our jsx code in multiple line we need to wrap inside () "bracket"


## react component
- component end  its function
- there are two tyoes of component 
-   - class based component  =>> this older method 
-   - functional component   =>> this current industies used now days   => a function which is return some piece of jsx is called functional components

### how to render functional component 
- react.render(<> reactComponent name here </>)
- when we call a component inside a another component is called  component composition


### {} curly bracket
- this bracket use we can inject any js variable in our jsx 
