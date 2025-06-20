# NPM 
          npm not call node pakage manager its a pakage manager 

### dependency 
- pakage json file is a configration file 
 >  there are two types of dependecy 1st normal 2nd dev dependecy

- dev dependany means its use in development time not in production time like  jest  mocha  etc.  and normal dependency means its use in production time like express  mongoose  etc.


# parcel 
 we install parcel by npm install -d parcel 

# "parcel": "^2.15.2" understanding version tilda (~)  and caret (^)
 - tilda is help to autometic updated version dowload when we put our code in production time its load update version but in case of caret its not load update version it load same version which we install in development time.

 <note> alway use caret (^) here "parcel": "^2.15.2"  >> here 2 is denote major update and .2 is denote minor update


 # package.json and package-lock.json 
 - package.json is make minor changes but package-lock.json is lock keep same version  pakage its not upadate any version 

 - those dependency which have its own dependecy is called transitive dependency 

 <note>  if we have our pakage.json and package-lock.json we can genrate node_modules folder  just type [npm install] in terminal and it will download all the dependency 


# dowload some dependency 
- npm i react react-dom 
- run our code by npx parcel index.html {npm start} one thing more delete main for dependency in package.json 


# parcel benifits 
- dev build
- local server
- HMR = hot moduel replacement
- caching - fast building
- image optimization
- bundling
- compress
- consistant hasing 
- support older brouser and making bundel accounding to browser 
- https