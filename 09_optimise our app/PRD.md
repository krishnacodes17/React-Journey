# how optimise our appp

- just make a everything which is used in our project in components and do not keep data feach and data displaying in same coponents its to much messi and overloading components

- seprate coponents for displaying data and data feaching 

- ##  chunking / code spilliting / dynamic bundeling / lazy loading / on demand loading / dynamix import

- its means you make your application in samller smaller chunkes 
- eg :  suppose a traveller booking website  where we book our train , aeroplane, bus , etc ticket on that application 

- so we make different differ bundeles for all categories like raliways reletred components bunndel seprate just like bus ,and train etc 


# lazy 
- React me lazy() ek built-in function hai jo code-splitting aur lazy loading ke liye use hota hai. Iska main purpose hota hai ki aap apne React components ko on-demand load karo, jab user actually uss component ko dekhne wala ho — na ki app start hote hi saare components load karne lagein.

- ye ek different file bayaega uss component ke liye 

-       -    const MyComponent = React.lazy(() => import('./MyComponent'));

## benifit
- ✅ App ka initial load fast hota hai

- ✅ Code-splitting ho jata hai (har component ka alag JS bundle ban jata hai)

- ✅ User experience better hota hai (especially large apps me)


- first we need to import Lazy from react 
- now where we need to use than import that remember that this iport not like importing components its is different 
 
 -     - const lazyhumai = lazy( ()=> import(here we give path of components) )

 - normally its store in variaable and import through lazy which is provide react and then its take a function and inside that function we write import and than path of that file which is importing

 -     -  const Grocery = lazy(()=> import ("./components/grocery "))