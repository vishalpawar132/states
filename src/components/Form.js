import React, { useState } from "react";

const Form = ()=>{
    const [name, setName] = useState("")

    function updateName (e){

        console.log(e.target.value);
        setName(e.target.value);
    }


    return (
        <div>
            <input type="text" placeholder="Enter your Name here"  onChange={updateName}/>
            <p>Your name is : {name}</p>
        </div>
    )
}

export default Form;
