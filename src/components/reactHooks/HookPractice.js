import React, {useState} from "react";

function HookPractice() {
    const [counter,  setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    return(
        <div>
            <h1>Counter {counter}</h1>
            <button onClick={increment}>Plus</button>
            <button onClick={decrement}>Minus</button>
        </div>
    )

}

export default HookPractice;