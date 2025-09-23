// useState 
// React hook
// it allows you to add state to funcational components 
// it allows you tio update the state and re-render the component when the value or state changes 

import { useState } from "react";



const TestHooks = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [inputValue, setInputValue] = useState("");
    // count is your current or updated value 
    // setCount is a function that allows you to update the value of count

    const handleClick = () => {
        console.log(name)
        setInputValue(name);
    }

    const handleAdd = ()=> {
        setCount(count +5)
        setCount(count +5)
        setCount(count +5)
        setCount((prev)=>prev + 5);
        setCount((prev)=>prev + 5);
        setCount((prev)=>prev + 5);
    }

    return (
        <>
        <h1>This is useState learing.....</h1>
        <h4>{count}</h4>
        <button onClick={()=> setCount(count + 1)}>inc by 1</button>
        <button
        onClick={handleAdd}
        >
            inc by 5
        </button>

        <input
        value={inputValue}
        onChange={(e)=>setName(e.target.value)}
        />
        <button onClick={handleClick}>name</button>
        <h4>{inputValue}</h4>
        </>

    )



}


export default TestHooks;