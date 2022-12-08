import './App.css';
<<<<<<< HEAD
import React, { useState } from "react"
import { Login } from "./Login"
import { Register } from "./Register"
import { Home } from "./Home"
import { Article } from "./Article"
=======
import React, { useState } from "react";
import { Login } from "./component/Login";
import { Register } from "./component/Register";
import { Home } from "./component/Home";
import { createRoot } from 'react-dom/client';
import Cookies from 'universal-cookie';
>>>>>>> origin/marius

const cookies = new Cookies();

function App() {
<<<<<<< HEAD
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

  // return (
  //   <div className="Home">
  //     <Home/>
  //   </div>
  // );

  return (
    <div className="Article">
      <Article />
    </div>
  );
=======
  const [currentForm, setCurrentForm] = useState('login');
  const toogleForm = (formName) => {
    setCurrentForm(formName)
  }

  if (cookies.get('isConnected')) {
    return <Home name={cookies.get('dotcom_user')}/>;
  }
  else {
    return (
      <div className="App">
        {
          currentForm === 'login' ? <Login onFormSwitch={toogleForm} /> : <Register onFormSwitch={toogleForm} />
        }
      </div>
    );
  }
>>>>>>> origin/marius
}

export default App;