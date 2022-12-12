import './App.css'
import React, { useState } from "react"
import { Login } from "./Login"
import { Register } from "./Register"
import { Home } from "./Home"
import { Article } from "./Article"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { render } from '@testing-library/react'

// const cookies = new Cookies();

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<div className='Home'><Home/></div>}></Route>
        <Route exact path='/article' element={<div className='Article'><Article/></div>}></Route>
      </Routes>
    </Router>
  )

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

  // return (
  //   <div className="Article">
  //     <Article />
  //   </div>
  // );
}

export default App;
