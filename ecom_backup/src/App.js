import './App.css';
import React, { useState } from "react";
import { Login } from "./routes/Login";
import { Register } from "./routes/Register";
import { Home } from "./routes/Home";
import { Cart } from "./routes/Cart";
import { Article } from "./routes/Articles";
import Cookies from 'universal-cookie';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Register",
    element: <Register />,
  },
  {
    path: "Home",
    element: <Home />,
  },
  {
    path: "Cart",
    element: <Cart />,
  },
  {
    path: "Product/",
    element: <Article />,
  },
]);

const cookies = new Cookies();

function App() {
  let contain = ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} data={'salut'}/>
    </React.StrictMode>
  );  
  // const [currentForm, setCurrentForm] = useState('login');
  // const toogleForm = (formName) => {
  //   setCurrentForm(formName)
  // }

  // const root = createRoot(document.getElementById('root'));

  // if (cookies.get('isConnected')) {
  //   return <Home root={root} name={cookies.get('dotcom_user')} />;
  // }
  // else {
  //   return (
  //     <div className="App">
  //       {
  //         currentForm === 'login' ? <Login onFormSwitch={toogleForm} /> : <Register onFormSwitch={toogleForm} />
  //       }
  //     </div>
  //   );
  // }
}

export default App;
