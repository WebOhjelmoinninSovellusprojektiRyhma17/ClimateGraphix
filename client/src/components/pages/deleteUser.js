import React from "react";
import axios from "axios";
import { useState } from "react";

export default function DeleteUser() {

    const URL = `http://localhost:3001/users/`

    const [message, setMessage] = useState([]);

    function handleDeleteSubmit() {
        let name = "";
        let tokeni = "";
        name = sessionStorage.getItem('username');
        tokeni = sessionStorage.getItem('token');
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
                <h2>Delete user</h2>
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