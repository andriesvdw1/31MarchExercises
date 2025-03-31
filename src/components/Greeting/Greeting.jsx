import React from 'react'
import './Greeting.css'
function Greeting({isMember}) {
  let greeting = "Welcome!";
  let loggedout = "Please sign up.";
  let output = "";
    if(isMember){
        output = greeting;
    }else{
        output = loggedout;
    }
    return (
        <div>{output}</div>
    
  )
}

export default Greeting