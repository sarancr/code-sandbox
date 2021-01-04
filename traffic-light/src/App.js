
import React, {useState, useEffect} from 'react';
import './style.css';

function App () {

   const[light,setLight] = useState("black");

   useEffect( ()=> {
     const timer = setInterval(() => {
       
     
     if(light === "black"){
        setLight("green");
     }

     else if(light === "green" ){
      setLight("yellow");

     }
     else if(light === "yellow" ){
      setLight("red");

     }

     else if(light === "red" ){
      setLight("green");

     }
     else {
      setLight("black");

     }
    },3000);

     return (  ) => {
       clearInterval(timer);
     }

   },[light])


  return (
    <div>
      <h1 className= "header"> traffic light</h1>
      <div className="lights">

      <div  className = {light === "green" ? "green" : "black"} 
      onClick = { () => setLight("green") }/> 

    <div  className = {light === "yellow" ? "yellow" : "black"} 
      onClick = { () => setLight("yellow") }/> 

    <div  className = {light === "red" ? "red" : "black"} 
      onClick = { () => setLight("red") }/> 

      </div>
    </div>
  )
}

export default App;