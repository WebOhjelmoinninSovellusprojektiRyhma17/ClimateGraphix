import React from "react";
import axios from "axios";
import { useState } from "react";

export default function DeleteUser() {

    URL = `http://localhost:3001/users/`

    var [message, setMessage] = useState([]);

    function handleDeleteSubmit() {
        var name = "";
        var tokeni = "";
        var name = sessionStorage.getItem('username');
        var tokeni = sessionStorage.getItem('token');
        axios.delete((URL+name), {
            headers: {
                Authorization: `Bearer ${tokeni}`
              }});
                setMessage("User deleted");
                sessionStorage.removeItem('token')
                sessionStorage.removeItem('username')
    };

    return (
        <form onSubmit={handleDeleteSubmit}>
            <div class='float-child'>
                <h2 id="logintitle">Delete user</h2>
                <div>
                    <label className='delete'for="delete" > This function deletes your user permanently</label>
                </div>
                <div className="message">
                            {message ? <p>{message}</p> : null}
                </div>
                <button type="submit">Delete user</button>
            </div>
        </form>
    )
}