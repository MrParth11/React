// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './action';
import './App.css'

function App() {
    const count = useSelector((state) => state.count); // Correctly accessing the state
    const dispatch = useDispatch();

    return (
        <>
            <h1>Counter APP</h1>
            <h1>Count: {count}</h1>
            <button onClick={() => { dispatch(increment()) }}>+</button>
            <button onClick={() => { dispatch(decrement()) }}>-</button>
        </>
    );
}

export default App;
