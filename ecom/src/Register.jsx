import React, { useState } from "react"
import logo from './img/logo.png'

export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //je recupere bien mon e-mail 
        console.log(email);
        //je recupere bien mon password 
        console.log(pass);
        console.log(name);
    }

    return (
        <div className="auth-from-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="logo"/>
                <div>
                    <label htmlFor="name">Full name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} id="name" name="name" placeholder="Enter your name" ></input>
                </div>
                <div>
                    <label htmlFor="e-mail"> E-mail</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your e-mail" id="e-mail" name="email"></input>
                </div>
                <div>
                    <label htmlFor="password"> Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password"></input>
                </div>
                <button type="submit">Register</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}