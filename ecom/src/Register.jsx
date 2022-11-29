import React, {useState} from "react"

export const Register= (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
       //je recupere bien mon e-mail 
       console.log(email);
      //je recupere bien mon password 
       console.log(pass); 
       console.log(name)
    
    }

return (
    <div className="auth-from-container">
        <form onSubmit={handleSubmit}>
        <h1>Register page</h1>
        <label htmlFor="name">Full name</label>
        <input value={name} id="name" name="name"  placeholder="Enter your name" ></input>
        <label htmlFor="e-mail"> E-mail</label>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="enter your e-mail" id="e-mail" name="email"></input>
        <label htmlFor="password"> Password</label>
        <input  value ={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password"></input>
        <button type="submit">Log In</button>
        </form>
        <button onClick={()=>props.onFormSwitch('login')}>Already have an account? Login here.</button>

        </div>
)
}