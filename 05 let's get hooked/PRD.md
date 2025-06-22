# Hooked 

- brfore we started our code first we need to make seprate folder which is SRC to keep a component folder inside src folder we create a components folde to  keep all the components inside it
- now we keep our componets seprate  like Header for we make seprate file Header.js and inside it we write our code 
 
<note>  never keep your data inside the components folder it is not good practice to keep data inside the components 

### export file 
- we have two types of export file 1) named export and 2) default export 
- named export is used when we want to export multiple things from a file    eg . export {Header,Footer}
- default export is used when we want to export only one thing from a file   eg. export default Header

- <note> when we make changes in state react re-render the component 


## working of react
- react use reconsilation algorithm (react fiber) to render the component 
- react doing its dom manupulation so fast ussing diffing algorithm (diffing algorithm dom aur vartual dom ko compare karte hain)

- Reconciliation => Reconciliation ek process hai jisme React old aur new Virtual DOM me difference nikalta hai aur woh difference real DOM me update karta hai.