import React from "react"
import cart from './img/icon-cart.svg'
import logo from './img/logo.png'
import products from './img/products.png'
import motherboard from './img/motherboard.png'
import facebook from './img/facebook.svg'
import linkedin from './img/linkedin.svg'
import twitter from './img/twitter.svg'
import branded from './img/branded.png'

export const Cart = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="logo" width="200" />
                    </a>
                    <form className="d-flex" role="search">
                        <input type="text" className="form-control me-2" placeholder="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav">
                        <li id="cart" className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={cart} alt="cart" width="30" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><h6 className="dropdown-header">Cart</h6></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li id="list">
                                    <div className="cart-item">
                                        <div className="overview">
                                            <img src={products} alt="products" />
                                            <div>
                                                <h6>Lorem Ipsum</h6>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <p id="price">XXX.XX€</p>
                                            <p id="amount">&#215;1</p>
                                        </div>
                                    </div>
                                    <div className="cart-item">
                                        <div className="overview">
                                            <img src={motherboard} alt="products" />
                                            <div>
                                                <h6>Lorem Ipsum</h6>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <p id="price">XXX.XX€</p>
                                            <p id="amount">&#215;1</p>
                                        </div>
                                    </div>
                                    <div className="cart-item">
                                        <div className="overview">
                                            <img src={motherboard} alt="products" />
                                            <div>
                                                <h6>Lorem Ipsum</h6>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <p id="price">XXX.XX€</p>
                                            <p id="amount">&#215;1</p>
                                        </div>
                                    </div>
                                    <div className="cart-item">
                                        <div className="overview">
                                            <img src={motherboard} alt="products" />
                                            <div>
                                                <h6>Lorem Ipsum</h6>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <p id="price">XXX.XX€</p>
                                            <p id="amount">&#215;1</p>
                                        </div>
                                    </div>
                                    <div className="cart-item">
                                        <div className="overview">
                                            <img src={motherboard} alt="products" />
                                            <div>
                                                <h6>Lorem Ipsum</h6>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <p id="price">XXX.XX€</p>
                                            <p id="amount">&#215;1</p>
                                        </div>
                                    </div>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <div className="d-flex justify-content-between align-items-center mx-2">
                                    <li>
                                        <p><strong>Total:</strong> XXX.XX€</p>
                                    </li>
                                    <li>
                                        <a href="#" className="btn btn-primary">View my cart</a>
                                    </li>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <div className="vr d-none d-lg-flex h-100 mx-lg-2 text-black"></div>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Log in</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className="m-2">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Cart</li>
                    </ol>
                </nav>
                <h1 className="text-center my-2">Your cart</h1>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div id="cart-item" className="container">
                                <div className="row">
                                    <div className="col">
                                        <img src={products} alt="products" />
                                    </div>
                                    <div className="col">
                                        <div className="overview">
                                            <h2>Lorem Ipsum</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet tempora nostrum nisi, ea nihil eaque.</p>
                                            <p><strong>Lorem ipsum:</strong> dolor sit amet, consectetur adipisicing elit. Perspiciatis, eligendi?</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="details">
                                            <p id="amount"><strong>Amount:</strong> <span><button id="add" className="btn btn-primary btn-sm">-</button></span>&#215;1<span><button id="remove" className="btn btn-primary btn-sm">+</button></span></p>
                                            <p id="price">XXX.XX€</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div id="cart-item" className="container">
                                <div className="row">
                                    <div className="col">
                                        <img src={motherboard} alt="products" />
                                    </div>
                                    <div className="col">
                                        <div className="overview">
                                            <h2>Lorem Ipsum</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet tempora nostrum nisi, ea nihil eaque.</p>
                                            <p><strong>Lorem ipsum:</strong> dolor sit amet, consectetur adipisicing elit. Perspiciatis, eligendi?</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="details">
                                            <p id="amount"><strong>Amount:</strong> <span><button id="add" className="btn btn-primary btn-sm">-</button></span>&#215;1<span><button id="remove" className="btn btn-primary btn-sm">+</button></span></p>
                                            <p id="price">XXX.XX€</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="recap" className="row my-4 text-center">
                    <h3 id="price">Total: XXX.XX€ <span id="tva" className="fs-6">(TVA: XX%)</span> <span className="ms-1"><a href="#" id="checkout" className="btn btn-primary">Checkout</a></span></h3>
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
                            <img src={facebook} alt="facebook" width="30"/>
                        </a>
                        <a href="#">
                            <img src={linkedin} alt="linkedin" width="30"/>
                        </a>
                        <a href="#">
                            <img src={twitter} alt="twitter" width="30"/>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};
