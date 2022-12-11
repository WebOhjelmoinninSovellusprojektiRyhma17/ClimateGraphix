import NavBar from "../NavBar";
import axios from "axios";
import { useState } from "react";

export default function Login() {

    const [uname, setUname] = useState([]);
    const [pword, setPword] = useState([]);
    var [username, setUsername] = useState([]);
    var [password, setPassword] = useState([]);
    var [message, setMessage] = useState([]);

    const url = 'http://localhost:3001/login';

    function setCookie(token, username) {

        //30min päästä token menee umpeen.
        var expirationDate = new Date(Date.now() + 30 * 60 * 1000);

        //Annetaan keksille funktion muuttujat ja laitetaan ajaksi 30min jonka jälkeen keksi vanhentuu
        document.cookie = "token=" + token + ";expires=" + expirationDate.toUTCString();
        document.cookie = "username=" + username + ";expires=" + expirationDate.toUTCString();
    }

    function handleLoginSubmit() {
        //Set default headers for Axios
        axios.defaults.headers.common['Content-Type'] = 'application/json';

        //Axios post pyyntö
        axios.post(url, {
            username: uname,
            password: pword
        })
            .then(response => {
                // Tallennetaan web token ja username muuttujaan.
                setCookie(response.data, uname);
            })
            .catch(error => console.error(error));
    }

    //Kun painetaan rekisteröidy niin lähetetään post
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //POST palvelimelle jotta saadaan käyttäjätunnukset tietokantaan.
            let res = await fetch("http://localhost:3001/users", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            });
            //Ottaa vastauksen ja esittää sen konsolissa.
            let resJson = await res.json();
            console.log(resJson);

            if (res.status === 200) {
                setUsername("");
                setPassword("");
                setMessage("User created successfully");
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <NavBar />
            <div class='float-container'>
                <form onSubmit={handleLoginSubmit}>
                    <div class='float-child'>
                        <h2 id='logintitle'>Login</h2>
                        <div>
                            <input value={uname} type="text" placeholder="Username" onChange={(e) => setUname(e.target.value)} required></input>
                        </div>
                        <div>
                            <input value={pword} type="password" placeholder="Password" onChange={(e) => setPword(e.target.value)} required></input>
                        </div>
                        <button type="submit">Login</button>
                    </div>
                </form>
                <form onSubmit={handleSubmit}>
                    <div class='float-child'>
                        <h2 id='logintitle'>Sign Up</h2>
                        <div>
                            <input type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div>
                            <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="message">
                            {message ? <p>{message}</p> : null}
                        </div>
                        <div>
                        <button>Create user</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}