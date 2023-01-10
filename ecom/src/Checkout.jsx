import React from 'react';
import Cookies from 'universal-cookie';
import cart from './img/icon-cart.svg';
import logo from './img/logo.png';
import products from './img/products.png';
import motherboard from './img/motherboard.png';
import facebook from './img/facebook.svg';
import linkedin from './img/linkedin.svg';
import twitter from './img/twitter.svg';

export const Checkout = () => {
    const cookies = new Cookies();
    const handleSubmit = (e) => {
        for (let i = 0; i < 6; i++) {
            if (e.target[i].value !== "") {
                cookies.set(e.target[i].id, e.target[i].value);
            }
        }
    };

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
            <main>
                <h1 className="text-center my-3">Checkout</h1>
                <div id="order" className="container">
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
                                            <p id="amount"><strong>Amount:</strong> &#215;1</p>
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
                                            <p id="amount"><strong>Amount:</strong> &#215;1</p>
                                            <p id="price">XXX.XX€</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="billing" className="container mt-3 d-flex flex-column align-items-center">
                    <section>
                        <div className="row">
                            <div className="col-md-8 mb-4">
                                <div className="card mb-4">
                                    <div className="card-header py-3">
                                        <h5 className="mb-0">Biling details</h5>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row mb-4">
                                                <div className="col">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="first-name">First name*</label>
                                                        <input type="text" id="first-name" className="form-control" required />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="last-name">Last name*</label>
                                                        <input type="text" id="last-name" className="form-control" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="company-name">Company name</label>
                                                <input type="text" id="company-name" className="form-control" />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="address">Address*</label>
                                                <input type="text" id="address" className="form-control" required />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="email">Email*</label>
                                                <input type="email" id="email" className="form-control" required />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="phone">Phone</label>
                                                <input type="number" id="phone" className="form-control" />
                                            </div>
                                            <hr className="my-4" />
                                            <h5 className="mb-4">Payment</h5>
                                            <div className="row mb-4">
                                                <div className="col">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="card-owner">Name on card</label>
                                                        <input type="text" id="card-owner" className="form-control" required />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="card-number">Credit card number</label>
                                                        <input type="text" id="card-number" className="form-control" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-3">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="card-expiration">Expiration</label>
                                                        <input type="text" id="card-expiration" className="form-control" required />
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="card-cvv">CVV</label>
                                                        <input type="text" id="card-cvv" className="form-control" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary btn-lg btn-block" type="submit">
                                                Pay
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card mb-4">
                                    <div className="card-header py-3">
                                        <h5 className="mb-0">Summary</h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                Products
                                                <span>XXX.XX€</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                                Shipping
                                                <span>XXX.XX€</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                <div>
                                                    <strong>Total amount</strong>
                                                    <strong>
                                                        <p className="mb-0">(including VAT)</p>
                                                    </strong>
                                                </div>
                                                <span><strong>XXX.XX€</strong></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
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
