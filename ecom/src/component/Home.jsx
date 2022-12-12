import React, { useState, useEffect } from "react";
import cart from '../img/icon-cart.svg';
import logo from '../img/logo.png';
import facebook from '../img/facebook.svg';
import linkedin from '../img/linkedin.svg';
import twitter from '../img/twitter.svg';
import { Article } from "./Articles";
import * as ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/modal";

import Cookies from 'universal-cookie';
import { Cart } from "./Cart";
const cookies = new Cookies();

export const Home = (props) => {
    const [products, setProducts] = useState([]);
    const register_url = "http://127.0.0.1:8000/api/show-products";

    useEffect(() => {
        const requestOptions = {
            method: 'GET'
        };
        fetch(register_url, requestOptions).then((response) => response.json()).then((data) => {
            setProducts(data.data);
        }).catch(err => console.log(err));
    }, []);

    return (
        <div className="Home">

            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div class="navbar-brand">
                        <img src={logo} alt="logo" width="200" />
                    </div>
                    <div id="search_bar_container" className="d-flex">
                        <input id="search_bar" type="text" className="form-control me-2" placeholder="Search" onChange={() => {
                            let search = document.getElementById('search_bar');
                            let search_bar_container = document.getElementById('search_bar_container');
                            console.log(search.value);

                            search_bar_container.append(search.value.slice(search.value.lastIndexOf(' ')));
                        }}/>
                        <button class="btn btn-outline-primary" type="button" onClick={() => {
                            let search = document.getElementById('search_bar').value;
                        }}>Search</button>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <img style={{ cursor: 'pointer' }} onClick={() => {
                                let root = ReactDOM.createRoot(document.getElementById('root'));
                                root.render(<Cart />);
                            }} src={cart} alt="cart" width="30" />
                        </li>
                        <li className="nav-item">
                            <div className="vr d-none d-lg-flex h-100 mx-lg-2 text-black"></div>
                        </li>
                        <li className="nav-item">
                            <div style={{ cursor: 'pointer' }} className="nav-link" onClick={() => {
                                cookies.set('isConnected', false, { path: '/', expires: new Date(Date.now() + 1) });
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
                                            root.render(<Article name={d.name} image={d.image} detail={d.detail} price={d.price} stock={d.stock} />);

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