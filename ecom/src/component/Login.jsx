import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import { Home } from './Home';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const Login = (props) => {

    const [email, setEmail] = useState(''); //pour recuperer l'e-mail inscrit dans l'input
    const [pass, setPass] = useState('');//pour recuper le password inscrit dans l'input

    return (
        <div className="auth-form-container">
            <form onSubmit={async (e) => {
                e.preventDefault();

                const register_url = "http://127.0.0.1:8000/api/login";

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
                            email: email,
                            password: pass,
                        })
                };
                await fetch(register_url, requestOptions).then((response) => response.json()).then((data) => {
                    let message = data.message;

                    if (message === "Connexion de l'utilisateur avec succès.") {
                        const container = document.getElementById('root');
                        const root = createRoot(container);
                        // cookies.set('isConnected', true, { path: '/' });
                        localStorage.setItem('isConnected', true);
                        localStorage.setItem('user_id', data.data.id);
                        root.render(<Home token={data.data.token}/>);
                    } else {
                        alert("Impossible de se connecter");
                    }
                }).catch(err => console.log(err));
            }}>
                <h1>Login page</h1>
                <label htmlFor="e-mail"> E-mail</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="enter your e-mail" id="e-mail" name="email"></input>
                <label htmlFfor="password"> Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password"></input>
                <button type="submit">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>

        </div>

    )
}