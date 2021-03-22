import React from 'react';
import {useInput} from "../hooks/useInput";
import '../css/Input.css';

export function Input() {

    const username = useInput("")
    const password = useInput("")

    return (
        <div className="cont">
            <div className="screen">{username.value}</div>
            <div className="screen">{password.value}</div>
            <input {...username} type="text" placeholder="username"/>
            <input {...password} type="text" placeholder="password"/>
            <button className="btn"
                    onClick={() =>
                        console.log(username.value)}>
                console.log(username.value)
            </button>
            <button className="btn"
                    onClick={() =>
                        console.log(password.value)}>
                console.log(password.value)
            </button>
        </div>
    )
}