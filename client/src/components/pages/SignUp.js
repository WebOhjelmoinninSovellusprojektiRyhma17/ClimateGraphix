import React, { useState } from 'react';

export default function SignUp() {
    //Muuttujat, joihin tallennetaan username ja password sekä message, joka tulostuu, kun nappia painetaan
    var [username, setUsername] = useState("");
    var [password, setPassword] = useState("");
    var [message, setMessage] = useState("");


    //Kun painetaan rekisteröidy niin lähetetään post
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //POST palvelimelle jotta saadaan käyttäjätunnukset tietokantaan.
            let res = await fetch(process.env.REACT_APP_API_ADDRESS + '/users', {
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


    //Palautetaan form jossa on signup ikkuna
    return (
        <>
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
        </>
    )
}