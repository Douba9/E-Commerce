import './App.css';
import React, { useState } from "react"
import { Login } from "./Login"
import { Register } from "./Register"
import { Home } from "./Home"


function App() {
  // const [currentForm, setCurrentForm] = useState('register');
  // const toogleForm = (formName) => {
  //   setCurrentForm(formName)
  // }
  // return (
  //   <div className="App">
  //     {
  //       currentForm == 'login' ? <Login onFormSwitch={toogleForm} /> : <Register onFormSwitch={toogleForm} />
  //     }
  //   </div>
  // );

  return (
    <div className="Home">
      <Home/>
    </div>
  );
}

export default App;