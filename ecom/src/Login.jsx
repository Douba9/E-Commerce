import React, {useState} from "react"


export const Login= () => {

    const [email, setEmail] = useState(''); //pour recuperer l'e-mail inscrit dans l'input
    const [pass, setPass] = useState('');//pour recuper le password inscrit dans l'input

    const handleSubmit =(e)=>{
        e.preventDefault();
       //je recupere bien mon e-mail 
       console.log(email)
      //je recupere bien mon password 
       console.log(pass)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <h1>Login page</h1>
        <label htmlFor="e-mail"> E-mail</label>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="enter your e-mail" id="e-mail" name="email"></input>
        <label htmlFfor="password"> Password</label>
        <input  value ={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password"></input>
        <button type="submit">Log In</button>
        </form>
        <button>Don't have an account? Register here.</button>

        </>
        
    )
    }