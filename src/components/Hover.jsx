import React, {useRef} from "react";
import '../css/Hover.css';
import '../css/Input.css';
import {useHover} from "../hooks/useHover";


export const Hover = () => {
    const ref = useRef()
    const isHovering = useHover(ref)
    console.log(isHovering)

    const container = {
        width: "300px",
        height: "300px",
        background: isHovering ? "red" : "green",
        marginTop: "20px"
    }

    return (
        <div ref={ref} style={container}>
        </div>
    )
}