import React, { useState, useEffect } from "react";
import cart from '../img/icon-cart.svg';
import logo from '../img/logo.png';
import facebook from '../img/facebook.svg';
import linkedin from '../img/linkedin.svg';
import twitter from '../img/twitter.svg';
import { Article } from "./Articles";
import * as ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";

import Cookies from 'universal-cookie';
import { Cart } from "./Cart";
const cookies = new Cookies();

export const Home = (props) => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState([]);
    const [cartItems, setCart] = useState([]);
    const [totalCart, setTotalCart] = useState(0);
    const register_url = "http://127.0.0.1:8000/api/show-products";
    const cartShow_url = "http://127.0.0.1:8000/api/cart/show";

    const cartRequestOptions = {
        method: 'POST',
        headers:
        {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': props.token,
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

    useEffect(() => {
        const requestOptions = {
            method: 'GET'
        };
        fetch(register_url, requestOptions).then((response) => response.json()).then((data) => {
            setProducts(data.data);
        }).catch(err => () => {
            console.log(err)
        });

    }, []);

    return (
        <div className="Home">

            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div class="navbar-brand">
                        <img src={logo} alt="logo" width="200" />
                    </div>
                    <div style={{ position: 'relative' }} id="search_bar_container" className="d-flex">
                        <input id="search_bar" type="text" className="form-control me-2" placeholder="Search" onChange={() => {
                            let s = document.getElementById('search_bar').value;

                            if (s.length > 0) {

                                let r = {
                                    method: 'GET'
                                };
                                fetch("http://localhost:8000/api/product-by-name/" + s, r).then((response) => response.json()).then((data) => {
                                    setSearch(data.data);
                                    console.log(data.data);
                                }).catch(err => console.log(err));
                            }
                            else {
                                setSearch([]);
                            }

                        }} />
                        <button class="btn btn-outline-primary" type="button" onClick={() => {
                            let s = document.getElementById('search_bar').value;

                            if (s.length > 0) {

                                let r = {
                                    method: 'GET'
                                };
                                fetch("http://localhost:8000/api/product-by-name/" + s, r).then((response) => response.json()).then((data) => {
                                    setProducts(data.data);
                                    console.log(data.data);
                                }).catch(err => console.log(err));
                            }

                            setSearch([]);
                        }}>Search</button>
                        <div style={{ position: 'absolute', top: '50px' }} className="card">
                            <div>
                                {search.map((s) => (
                                    <div>
                                        <img src={s.image} alt="Product Image" />
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <p className="card-text">{s.name}</p>
                                            <p className="card-text"></p>
                                            <p className="card-text">{s.price}</p>
                                        </div>
                                        <p>stock : {s.stock}</p>
                                        <button className="btn btn-primary">Add to cart</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <ul className="navbar-nav">

                        <li id="cart" className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={cart} alt="cart" width="30" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><h6 className="dropdown-header">Cart</h6></li>

                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    {cartItems.length ? cartItems.map((i) => (

                                        <div className="cart-item">
                                            <div className="overview">
                                                <img src={i.product.image} alt="products" />
                                                <div>
                                                    <h6>{i.product.name}</h6>
                                                </div>
                                            </div>
                                            <div className="details">
                                                <p id="price">{i.product.price}</p>
                                                <p id="amount">&#215;{i.quantity}</p>
                                            </div>
                                        </div>


                                    )) : null}
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <div className="d-flex justify-content-between align-items-center mx-2">
                                    <li>
                                        <p><strong>Total:</strong> {totalCart}$</p>
                                    </li>

                                </div>
                                <li>
                                    <a href="#" className="btn btn-primary">View my cart</a>
                                    <a href="#" onClick={() => {
                                        const register_url = "http://localhost:8000/api/cart/clear";

                                        const requestOptions = {
                                            method: 'POST',
                                            headers:
                                            {
                                                'Content-Type': 'application/json',
                                                'Accept': 'application/json',
                                            },
                                            body: JSON.stringify(
                                                {
                                                    user_id: localStorage.getItem('user_id'),
                                                })
                                        };
                                        fetch(register_url, requestOptions).then((response) => response.json()).then((data) => {
                                            console.log(data);
                                        }).catch(err => console.log(err));
                                    }} className="btn btn-danger">Empty Cart</a>
                                </li>

                            </ul>
                        </li>

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
            <main className="container">
                <div id="products" className="row">

                    {products.map((product) => (

                        <div className="card">
                            <img src={product.image} alt="products" className="card-img-top" />

                            <div className="card-body">
                                <h5 className="card-title">
                                    {product.name}
                                </h5>
                                <p className="card-text" id="price">Price: {product.price}</p>
                                <p className="card-text" id="detail">Details: {product.detail}</p>
                                <p className="card-text" id="stock">Stock: {product.stock}</p>
                                <div>

                                    <button onClick={() => {
                                        let register_url = "http://127.0.0.1:8000/api/get-product/" + product.id;
                                        const requestOptions = {
                                            method: 'GET',
                                            Authorization: props.token
                                        };

                                        fetch(register_url, requestOptions).then((response) => response.json()).then((data) => {
                                            let d = data.data;
                                            console.log(d);

                                            const container = document.getElementById('root');
                                            const root = ReactDOM.createRoot(container);
                                            root.render(<Article id={d.id} name={d.name} image={d.image} detail={d.detail} price={d.price} stock={d.stock} />);

                                        }).catch(err => console.log(err));

                                    }} className="btn btn-primary">Technical Sheet</button>
                                </div>
                            </div>
                        </div>
                    ))}
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