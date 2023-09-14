import React,{useState} from "react";

const Statebasic = () =>{
    let a = 10; 
    const [count, setCount] = useState(0);
    
    function increses (){
        a = a + 1;
        console.log("value of a is " , a);
    }

    function increseCount(){
        setCount(count+1);
    }


    return (
        <div>
            <h1>value "a" is {a}</h1>
            <button onClick={increses}>Increses</button>
            <h1>value "a" is {count}</h1>
            <button onClick={increseCount}>Increse count</button>
        </div>
    )
}

export default Statebasic;
