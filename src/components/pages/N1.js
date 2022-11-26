import React from "react";
import NavBar from "../NavBar";
import V1 from "../charts/V1";
import V3 from "../charts/V3";
import V4 from "../charts/V4";

export default function N1() {
    return (
        <>
            <NavBar />
            <V1 />
            <V3 />
            <V4 />
        </>
    )
}