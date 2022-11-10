import React, {useState,setState} from 'react';
import axios from 'axios';
import NavBar from "../NavBar";

export default function SignUp() {
    //Muuttujat  johon tallennetaan username ja password
    const [username, setusername] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "username") {
            setusername(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }

    }

    //Kun painetaan rekisteröidy niin lähetetään post
    const handleSubmit = () => {
        console.log(username,password,confirmPassword);
        axios.post('http://localhost:3001/users', {
            Username: username,
            Password: password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          
    }

    //Palautetaan form jossa on signup ikkuna
    return (
        <>
            <NavBar />
            <div className="form">
                <div className="form-body">
                    <div className="username">
                        <label className="form__label" for="username">First Name </label>
                        <input className="form__input" type="text" value={username} onChange={(e) => handleInputChange(e)} id="username" placeholder="First Name" />
                    </div>

                    <div className="password">
                        <label className="form__label" for="password">Password </label>
                        <input className="form__input" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password" />
                    </div>

                    <div className="confirm-password">
                        <label className="form__label" for="confirmPassword">Confirm Password </label>
                        <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Confirm Password" />
                    </div>
                </div>
                <div class="footer">
                    <button onClick={() => handleSubmit()} type="submit" class="btn">Register</button>
                </div>
            </div>
        </>
    )
}