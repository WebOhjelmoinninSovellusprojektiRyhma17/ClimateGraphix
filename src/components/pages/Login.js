import NavBar from "../NavBar";
import Footer from '../Footer';
import axios from "axios";
import { useState } from "react";



const URL = 'http://localhost:3001/'

export default function Login() {

    const [userB, getUserB] = useState([]);
    const [uname, setUname] = useState([]);
    const [pword, setPword] = useState([]);

    const getUserdata = () => {
        axios.get(`${URL}users/${uname}`)
            .then((response) => {
                getUserB(response.data);
            }).catch(error =>
                console.error(`Error: ${error}`));
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