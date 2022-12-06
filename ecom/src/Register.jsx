import React, { useState } from "react";

export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [pass_c, setPass_c] = useState('');
    const [name, setName] = useState('');

    return (
        <div className="auth-from-container">
            <form onSubmit={async (e) => {
                e.preventDefault();

                const register_url = "http://127.0.0.1:8000/api/register";

                const requestOptions = {
                    method: 'POST',
                    headers:
                    {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer.$accessToken',
                    },
                    body: JSON.stringify(
                        {
                            name: name,
                            email: email,
                            password: pass,
                            c_password: pass_c,
                        })
                };
                await fetch(register_url, requestOptions).then((response) => response.json()).then((data) => {
                    let message = data.message;

                    console.log(message);

                    if (message === "User register successfully.") {
                        props.onFormSwitch('login');
                    } else {
                        alert("Impossible de s'inscrire");
                    }
                });
            }}>
                <h1>Register page</h1>
                <label htmlFor="name">Full name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} id="name" name="name" placeholder="Enter your name" ></input>
                <label htmlFor="e-mail"> E-mail</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="enter your e-mail" id="e-mail" name="email"></input>
                <label htmlFor="password"> Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password"></input>
                <label htmlFor="password_c">Confim Password</label>
                <input value={pass_c} onChange={(e) => setPass_c(e.target.value)} type="password" placeholder="*******" id="password_c" name="password"></input>
                <button type="submit">Register</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>

        </div>
    )
}