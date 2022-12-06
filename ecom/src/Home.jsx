import React, { useState, useEffect } from "react"
import cart from './img/icon-cart.svg'
import logo from './img/logo.png'
import productsImg from './img/products.png'
import motherboard from './img/motherboard.png'
import facebook from './img/facebook.svg'
import linkedin from './img/linkedin.svg'
import twitter from './img/twitter.svg'
import noimg from './img/noimg.png';
import "bootstrap/dist/css/bootstrap.css";

export const Home = () => {
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
                    <a class="navbar-brand">
                        <img src={logo} alt="logo" width="200" />
                    </a>
                    <form className="d-flex" role="search">
                        <input type="text" className="form-control me-2" placeholder="Search" />
                        <button class="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <img src={cart} alt="cart" width="30" />
                        </li>
                        <li className="nav-item">
                            <div className="vr d-none d-lg-flex h-100 mx-lg-2 text-black"></div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Log in</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className="container">
                <div id="products" className="row">
                    {products.map((product) => (
                        
                        <div className="card">
                            <img src={noimg} alt="products" className="card-img-top" />

                            <div className="card-body">
                                <h5 className="card-title">
                                    {product.name}
                                </h5>
                                <p className="card-text" id="price">Price: {product.price}</p>
                                <p className="card-text" id="detail">Details: {product.detail}</p>
                                <p className="card-text" id="stock">Stock: {product.stock}</p>
                                <a>
                                    <button id={product.id} className="btn btn-primary">Technical Sheet</button>
                                </a>
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
                        <a>
                            <img src={facebook} alt="facebook" width="30" />
                        </a>
                        <a>
                            <img src={linkedin} alt="linkedin" width="30" />
                        </a>
                        <a>
                            <img src={twitter} alt="twitter" width="30" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// async function getProducts() {

//     const register_url = "http://127.0.0.1:8000/api/show-products";

//     const requestOptions = {
//         method: 'GET'
//     };
//     await fetch(register_url, requestOptions).then((response) => response.json()).then((data) => {

//         let products = data.data;

//         products.forEach(element => {
//             let name = element.name;
//             let description = element.description;
//             let image = element.image;
//             let price = element.price;
//             let stock = element.stock;
//             let created_at = element.created_at;

//             productsArray.push([name, description, image, price, stock, created_at]);

//         });
//     }).catch(err => console.log(err));
// }