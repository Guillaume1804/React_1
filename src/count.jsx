import React from "react";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return <>
        <div>
            <p>Compteur actuelle {count}</p>
            <button onClick={() => {setCount(count + 1)}}>+</button>
            <button onClick={() => {setCount(count - 1)}}>-</button>
        </div>
    </>
}

export default Counter;