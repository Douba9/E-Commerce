import './App.css';
import React, { useState } from 'react';
import { Login } from './Login';
import { Register } from './Register';
import { Home } from './Home';
import { Cart } from './Cart';
import { Article } from './Article';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { render } from '@testing-library/react';

// const cookies = new Cookies();

function App() {
  // return (
  //   <div className='Home'>
  //     <Home/>
  //   </div>
  // );

  // const [currentForm, setCurrentForm] = useState('register');
  // const toogleForm = (formName) => {
  //   setCurrentForm(formName)
  // }
  // return (
  //   <div className='App'>
  //     {
  //       currentForm == 'login' ? <Login onFormSwitch={toogleForm} /> : <Register onFormSwitch={toogleForm} />
  //     }
  //   </div>
  // );

  // return (
  //   <div className='Article'>
  //     <Article />
  //   </div>
  // );

  return (
    <div className='Cart'>
      <Cart />
    </div>
  )
}

export default App;
