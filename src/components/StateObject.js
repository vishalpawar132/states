import React, { useState } from "react";

const StateObject = ()=>{

    const [coins, setCoins] = useState({gold: 0, silver: 0, bronze:0})

    console.log("coins", coins);

    function IncreaseGold(){
        setCoins({...coins, gold: coins.gold+1});
    }

    function IncreaseSilver(){
        setCoins({...coins, silver: coins.silver+1});
    }

    function IncreaseBronze(){
        setCoins({...coins, bronze: coins.bronze+1});
    }
    

    return (
        <div>
            <p>Gold : {coins.gold} | Silver : {coins.silver} | Bronze : {coins.bronze}</p>
            <button onClick={IncreaseGold}>Gold</button>
            <button onClick={IncreaseSilver}>Silver</button>
            <button onClick={IncreaseBronze}>Bronze</button>
           
        </div>
    )
}


export default StateObject;