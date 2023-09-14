import React, { useState } from "react";

const Form1 = ()=>{

const [name, setName] = useState("");
const [upperCase, setUpperCase] = useState("");

function makeItCapitle(){
    setUpperCase(name.toUpperCase());
}




    return (
        <div>
            <input type="text" placeholder="Enter your Name here"  onChange={ e=> setName(e.target.value)}/>
            <button onClick={makeItCapitle}>Make it capitle</button>
            <p>Your name is : {upperCase}</p>
        </div>
    )
}

export default Form1;
