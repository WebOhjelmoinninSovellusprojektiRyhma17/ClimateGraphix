import NavBar from "../NavBar";
import Footer from '../Footer';
import axios from "axios";
import { useState } from "react";



const URL = 'http://localhost:3001/'

export default function Login() {

    const [userB, getUserB] = useState([]);
    const [uname, setUname] = useState([]);
    const [pword, setPword] = useState([]);

    // Asetetaan viimeinen käyttöpäivä keksille.
    var expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (1 * 24 * 60 * 60 * 1000));



    const getUserdata = () => {
        //GET pyyntö
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3001/login', true);
        xhr.send();

        // Hoitaa vastauksen
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                // Ottaa get pyynnön rungon
                var response = xhr.responseText;

                // Tarkistaa onko vastaus webtoken
                var regex = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/;
                if (regex.test(response)) {
                    // Tulostaa webtokenin
                    console.log(response);

                    //Asetetaan keksille salasana ja käyttäjätunnus
                    document.cookie = 'username=USERNAME; expires=' + expirationDate.toUTCString();
                    document.cookie = 'password=PASSWORD; expires=' + expirationDate.toUTCString();
                    document.cookie = 'token=TOKEN; expires=' + expirationDate.toUTCString();
                } else {
                    // Virheestä tulee popup ikkuna ei aina toimi.
                    window.alert("Invalid credentials");
                }
            }
        }
    }

    return (
        <>
            <NavBar />
            <center><form onSubmit={getUserdata}>
                <center> <h2 id='logintitle'>Login</h2> </center>
                <div class='loginbox'>
                    <input value={uname} type="text" placeholder="Enter Username" onChange={(e) => setUname(e.target.value)} required></input>
                    <input value={pword} type="password" placeholder="Enter Password" onChange={(e) => setPword(e.target.value)} required></input>
                    <button type="submit">Login</button>
                </div>
            </form></center>
            <Footer />
        </>
    )
}