"use client"

import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(1);
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increment
            </button>
            <button onClick={() => {
                setCount(count - 1)
            }}>Decrement
            </button>

            <div> Is counter even?</div>
            {count % 2 === 0 && <h1>Yes it is!</h1>}
            {count % 2 !== 0 && <h1>No it is odd!</h1>}
        </div>
    )
}

export default Counter;
