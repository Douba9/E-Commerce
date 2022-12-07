import './App.css';
import React, { useState } from "react"
import { Login } from "./Login"
import { Register } from "./Register"
import { Home } from "./Home";
import { createRoot } from 'react-dom/client';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toogleForm = (formName) => {
    setCurrentForm(formName)
  }

  if (cookies.get('isConnected')) {
    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(<Home />);
  } else {
    console.log("salut")
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
