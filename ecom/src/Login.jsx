import React, { useState } from "react"
import logo from './img/logo.png'

export const Login = (props) => {

    const [email, setEmail] = useState(''); //pour recuperer l'e-mail inscrit dans l'input
    const [pass, setPass] = useState('');//pour recuper le password inscrit dans l'input

    const handleSubmit = (e) => {
        e.preventDefault();
        //je recupere bien mon e-mail 
        console.log(email)
        //je recupere bien mon password 
        console.log(pass)
    }

    return (
        <div className="auth-form-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="logo"/>
                <div>
                    <label htmlFor="e-mail">E-mail</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="enter your e-mail" id="e-mail" name="email"></input>
                </div>
                <div>
                    <label htmlFfor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password"></input>
                </div>
                <button type="submit">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}