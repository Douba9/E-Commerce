import React from "react";

import logo from '../img/logo.png';
import facebook from '../img/facebook.svg';
import linkedin from '../img/linkedin.svg';
import twitter from '../img/twitter.svg';

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
            <main className="container">

                

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