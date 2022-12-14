import NavBar from "../NavBar";
import Footer from '../Footer';
import { useState } from "react";
import axios from "axios";

export default function Login() {

    const url = 'http://localhost:3001/login';
    const [uname, setUname] = useState([]);
    const [pword, setPword] = useState([]);

    function setCookie(token, username) {

        //30min päästä token menee umpeen.
        var expirationDate = new Date(Date.now() + 30 * 60 * 1000);

        //Annetaan keksille funktion muuttujat ja laitetaan ajaksi 30min jonka jälkeen keksi vanhentuu
        document.cookie = "token=" + token + ";expires=" + expirationDate.toUTCString();
        document.cookie = "username=" + username + ";expires=" + expirationDate.toUTCString();
    }

    function handleSubmit() {
        //Set default headers for Axios
        axios.defaults.headers.common['Content-Type'] = 'application/json';

        //Axios post pyyntö
        axios.post(url, {
            username: uname,
            password: pword
        })
            .then(response => {

                sessionStorage.setItem('username', uname);
                sessionStorage.setItem('token', response.data);
                
                /*if (sessionStorage.key("token") = "false") {
                    setMessage("Something went wrong")
                    sessionStorage.clear("username");
                    sessionStorage.clear("token");
                } */
                setUsername("");
                setPassword("");
                setMessage("Login successful");
                
            })
            .catch((error => console.error(error)));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                    <div class='float-child'>
                        <h2 id='logintitle'>Login</h2>
                        <div>
                            <input value={uname} type="text" placeholder="Username" onChange={(e) => setUname(e.target.value)} required></input>
                        </div>
                        <div>
                            <input value={pword} type="password" placeholder="Password" onChange={(e) => setPword(e.target.value)} required></input>
                        </div>
                        <div className="message">
                            {message ? <p>{message}</p> : null}
                        </div>
                        <button type="submit">Login</button>
                    </div>
            </form>
        </>
    )
}