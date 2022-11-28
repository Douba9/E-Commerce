import './App.css';
import React, {useState} from "react"
import {Login} from "./Login"
import {Register} from "./Register"


function App() {
  const[currentForm, setCurrentForm]= useState('login');
  return (
    <div className="App">
      {
        currentForm == 'login' ? <Login/> :  <Register/>
      }
    </div>
  );
}

export default App;
