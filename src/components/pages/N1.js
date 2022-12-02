import React from "react";
import NavBar from "../NavBar";
import Header from "../Header"
import V1 from "../charts/V1";
import V8 from "../charts/V8";

export default function N1() {
    return (
        <>
            <NavBar />
            <V1 />
            <V8 />
        </>
    )
}