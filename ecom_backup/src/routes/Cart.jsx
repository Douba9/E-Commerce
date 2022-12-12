import React from "react";

import logo from '../img/logo.png';
import facebook from '../img/facebook.svg';
import linkedin from '../img/linkedin.svg';
import twitter from '../img/twitter.svg';

//import { createRoot } from 'react-dom/client';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const Cart = (props) => {
    return (
        <div className="Home">

            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div class="navbar-brand">
                        <img src={logo} alt="logo" width="200" />
                    </div>
                    <h1>Cart</h1>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="vr d-none d-lg-flex h-100 mx-lg-2 text-black"></div>
                        </li>
                    </ul>
                </div>
            </nav>
            <main id="main" className="container">

                {() => {
                    let cart = cookies.get('my_cart');
                    console.log(cart);

                    // let Cartroot = createRoot(document.getElementById('main'));
                    // let emptyCartroot = createRoot(document.getElementById('main'));

                    if (cookies.get('my_cart')) {
                        return (
                            <div>
                                <h1>{cart}</h1>
                            </div>
                        );
                    }
                    else {
                        return (
                            <div>
                                <h1>Your cart is empty!</h1>
                            </div>
                        );
                    }
                }}

            </main>
            <footer className="container-fluid bg-light">
                <div className="row">
                    <div className="col">&#169;2022 DoubaCorp</div>
                    <div className="col">
                        <h6>About DoubaCorp</h6>
                    </div>
                    <div className="col text-center socials">
                        <div>
                            <img src={facebook} alt="facebook" width="30" />
                        </div>
                        <div>
                            <img src={linkedin} alt="linkedin" width="30" />
                        </div>
                        <div>
                            <img src={twitter} alt="twitter" width="30" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}