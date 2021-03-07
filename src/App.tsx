import React from 'react';
import './App.css';
import {useInput} from "./hooks/useInput";

function App() {

    const username = useInput("")
    const password = useInput("")

    return (
        <div className="App">
            <div className="screen">{username.value}</div>
            <div className="screen">{password.value}</div>
            <input {...username} type="text" placeholder="username"/>
            <input {...password} type="text" placeholder="password"/>
            <button
                onClick={() =>
                    console.log(username.value)}>
                console.log(username.value)
            </button>
            <button
                onClick={() =>
                    console.log(password.value)}>
                console.log(password.value)
            </button>
        </div>
    );
}

export default App;
