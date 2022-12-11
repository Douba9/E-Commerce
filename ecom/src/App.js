import './App.css';
import React, { useState } from "react";
import { Login } from "./component/Login";
import { Register } from "./component/Register";
import { Home } from "./component/Home";
import { createRoot } from 'react-dom/client';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function App() {
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
}

export default App;
