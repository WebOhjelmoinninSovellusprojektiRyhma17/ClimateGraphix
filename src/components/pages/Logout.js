import React from "react";
import axios from "axios";
import { useState } from "react";

export default function LogoutUser() {

    function handlelogoutSubmit() {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('username')
    }   

    return (
        <form onSubmit={handlelogoutSubmit}>
            <div class='float-child'>
                <h2 id="logintitle">Logout from this session (not working)</h2>
                <button type="Logout">Logout</button>
            </div>
        </form>
    )
}