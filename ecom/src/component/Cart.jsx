import React, { useState, useEffect } from "react";
import logo from '../img/logo.png';
import facebook from '../img/facebook.svg';
import linkedin from '../img/linkedin.svg';
import twitter from '../img/twitter.svg';
import { Home } from './Home';
import { createRoot } from 'react-dom/client';

export const Cart = () => {

    const [cartItems, setCart] = useState([]);
    const [totalCart, setTotalCart] = useState(0);
    const cartShow_url = "http://127.0.0.1:8000/api/cart/show";

    const cartRequestOptions = {
        method: 'POST',
        headers:
        {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(
            {
                user_id: localStorage.getItem('user_id')
            }
        )
    };
    fetch(cartShow_url, cartRequestOptions).then((response) => response.json()).then().then((i) => {
        setCart(i.items);
        setTotalCart(i.total);
        // console.log(cartItems);
        // console.log(totalCart);
    }).catch((err) => {
        setCart([]);
        setTotalCart(0);
        // cookies.set('isConnected', false, { path: '/', expires: new Date(Date.now() + 1) });
        // window.location.reload(false);
        // console.log(err);
    });

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="logo" width="200" />
                    </a>
                    <ul className="navbar-nav">
                        <button className="btn btn-primary" onClick={() => {
                            const container = document.getElementById('root');
                            const root = createRoot(container);
                            root.render(<Home />);
                        }}>Home</button>
                        <li className="nav-item">
                            <div className="vr d-none d-lg-flex h-100 mx-lg-2 text-black"></div>
                        </li>
                        <li className="nav-item">
                            <div style={{ cursor: 'pointer' }} className="nav-link" onClick={() => {
                                localStorage.setItem('isConnected', null);
                                window.location.reload(false);
                            }}>Log out</div>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className="m-2">
                <h1 className="text-center my-2">Your cart</h1>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    {cartItems.length ? cartItems.map((i) => (

                        <div className="card">
                            <div className="card-body">
                                <div className="overview">
                                    <img src={i.product.image} alt="products" className="card-img-top" />
                                    <div>
                                        <h6>{i.product.name}</h6>
                                    </div>
                                </div>
                                <div>
                                    <p className="card-text" id="price">{i.product.price}</p>
                                    <p className="card-text" id="amount">&#215;{i.quantity}</p>
                                </div>
                            </div>
                        </div>


                    )) : null}
                </div>
                <div id="recap" className="row my-4 text-center">
                    <h3 id="price">Total: {totalCart}$ <span id="tva" className="fs-6">(TVA: XX%)</span> <span className="ms-1"><a href="#" id="checkout" className="btn btn-primary">Checkout</a></span></h3>
                </div>
            </main>
            <footer className="container-fluid bg-light">
                <div className="row">
                    <div className="col">&#169;2022 DoubaCorp</div>
                    <div className="col">
                        <h6>About DoubaCorp</h6>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ullam.
                    </div>
                    <div className="col text-center socials">
                        <a href="#">
                            <img src={facebook} alt="facebook" width="30" />
                        </a>
                        <a href="#">
                            <img src={linkedin} alt="linkedin" width="30" />
                        </a>
                        <a href="#">
                            <img src={twitter} alt="twitter" width="30" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};