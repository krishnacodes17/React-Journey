# Routes 

 ### useEffect 
  - when our components is rander that how much time our components rander that much time our useEffect will run

  - if no dependency array => useEffect is called  on every render
  -If dependency array is empty ->>[] useEffect is called on Initial rander just once time  

  - if dependency array is given its rander that much time for eg:  suppose we give inside our dependency array is btnclicked => that means useEffect will run on every click of button 
  -          - useEffect(()=>{console.log("useEffect called")},[btnclicked])

  #### best practice of
   
   - always use  sueState on top when function is started 
   - not use useState inside if else condition 





# Routing 
- for our routing we use react router Dom

 -         npm install react-router-dom
 
 -         import {
                   createBrowserRouter,
                   RouterProvider,
                 } from "react-router-dom"; 

 
 - this is import inside main.jsx because every routers functionlity is inside main.jsx
 - now we create routes  
 -        const router = createBrowserRouter([
                            {
                              path: "/",
                              element: <HomePage />,
                            },
                            {
                              path: "/about",
                              element: <AboutPage />,
                            },
                          ]);

- path means location where user search / so that time run homepage components means element is our component  eg : - suppose user search on  "/" routes than its go on homepage component

### how to run our routes 
- we use RouterProvider
- RouterProvider is a function that takes router as a prop and provide routing configration 


### error handeling 

- we handele our error using "useRouterError" hooked and also we coustomise our error page using error page component

-                - import {useRouterError} from "react-router-dom";


#### children routes 
-  we create childre routes here 
-            - {
            path: "/",
            element: <App />,
            errorElement: <Error />,
            children: [
              {
                path: "/about",
                element: <About />,
              },
              {
                path: "/contact",
                element: <ContectUs />,
              },
              {
                path: "/Cart",
                element:<Cart/>
              }
            ],
              },

- here we have a children and inside we have array forment of routes and when we go any path its render that components 
- <note>   we use children  so we need import  "Outlet" component in our App.js file  and in the place of "outlet" every path will be rander 

### links 
- we never use <a href:"/ about">  anker tag in react router dom  to open and go another nevegate to another page because its referace our page and and this will be distroed react router dom functionality (concept)

-- now for nevigate to anothe page we use Link  component  

### link component 
- import link from "react-router-dom" 
-      - import {Link} from "react-router-dom"


### Routing types in web apps
 - there are two types of routing
  - - client side routing 
  - - - Page reload nahi hota, sirf content dynamically change hota hai based on URL. React Router DOM is used.
  - - server side routing
  - - - Har URL request server ko jata hai. Server har baar naya HTML return karta hai.



  