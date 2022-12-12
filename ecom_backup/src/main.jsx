import React from "react";
import ReactDOM from "react-dom/client";
import { Login } from "./component/Login";
import { Register } from "./component/Register";
import { Home } from "./component/Home";
import { Cart } from "./component/Cart";
import {
    Route,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Login />}>
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="Home" element={<Home />} />
            <Route path="Cart" element={<Cart />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);