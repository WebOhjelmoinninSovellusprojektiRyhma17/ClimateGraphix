import React from "react";
import axios from "axios";
import { useState } from "react";

export default function DeleteUser() {

    const [uname, setUname] = useState([]);
    const [token, setToken] = useState([]);

    function handleDeleteSubmit() {
        setUname = sessionStorage.getItem('username');
        setToken = sessionStorage.getItem('token');
        axios.delete(`http://localhost:3001/users/${uname}`);
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('username')
    }

    return (
        <form onSubmit={handleDeleteSubmit}>
            <div class='float-child'>
                <h2 id="logintitle">Delete user</h2>
                <div>
                    <input type="checkbox" value="1" name="delete" id="delete" />
                    <label className='delete'for="delete" > Delete my user permanently</label>
                </div>
                <button type="submit">Delete user</button>
            </div>
        </form>
    )
}