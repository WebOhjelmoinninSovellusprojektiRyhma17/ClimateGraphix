import React from "react";
import NavBar from "../NavBar";
import V1 from "../charts/V1";
import V3 from "../charts/V3";
import V5 from "../charts/V5";
import V7 from "../charts/V7";
import V10 from "../charts/V10";

export default function N1() {
    return (
        <>
            <NavBar />
            <V10 />
            <V1 />
            <V3 />
            <V5 />
            <V7 />
        </>
    )
}