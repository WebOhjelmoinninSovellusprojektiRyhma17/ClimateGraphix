import NavBar from "../NavBar";
import axios from "axios";
import { useState } from "react";
import DeleteUser from "./deleteUser";
import LogoutUser from "./Logout";
import SignUp from "./SignUp";
import Login from "./Login";

export default function LoginSignUp() {

    return (
        <>
            <NavBar />
            <div class='float-container'>
                <Login />
                <SignUp />
                <DeleteUser />
                <LogoutUser />
            </div>
        </>
    )
}