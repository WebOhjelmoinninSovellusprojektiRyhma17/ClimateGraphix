import NavBar from "../NavBar";
import Footer from '../Footer';
import { useState } from "react";
import axios from "axios";

export default function Login() {

    const url = 'http://localhost:3001/login';
    const [uname, setUname] = useState([]);
    const [pword, setPword] = useState([]);
    var [username, setUsername] = useState([]);
    var [password, setPassword] = useState([]);
    var [message, setMessage] = useState([]);

    function handleLoginSubmit() {
        //Set default headers for Axios
        axios.defaults.headers.common['Content-Type'] = 'application/json';

        //Axios post pyyntö
        axios.post(url, {
            username: uname,
            password: pword
        })
            .then(response => {

                console.log(response);
                sessionStorage.setItem('username', uname);
                sessionStorage.setItem('token', response.data);
                
                //setUsername("");
                //setPassword("");
                
            })
            .catch(error => console.error(error));
    }

    return (
        <>
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
        </>
    )
}