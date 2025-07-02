 import { useRouteError } from "react-router-dom";
 
 
 const Error = ()=>{

    const err = useRouteError();   // here import (use) routerError

    return (
       <>
        <h1>oops!</h1>
        <h3>something went wrong</h3>
        <h3>{err.status} {err.statusText}</h3> // here we use err

      </>
    )
}

export default Error;