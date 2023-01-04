import React from 'react';
import cart from './img/icon-cart.svg';
import logo from './img/logo.png';
import products from './img/products.png';
import motherboard from './img/motherboard.png';
import facebook from './img/facebook.svg';
import linkedin from './img/linkedin.svg';
import twitter from './img/twitter.svg';

export const Checkout = () => {
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
                        <div class="row">
                            <div class="col-md-8 mb-4">
                                <div class="card mb-4">
                                    <div class="card-header py-3">
                                        <h5 class="mb-0">Biling details</h5>
                                    </div>
                                    <div class="card-body">
                                        <form>
                                            <div class="row mb-4">
                                                <div class="col">
                                                    <div class="form-outline">
                                                        <label class="form-label" for="first-name">First name*</label>
                                                        <input type="text" id="first-name" class="form-control" required />
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="form-outline">
                                                        <label class="form-label" for="last-name">Last name*</label>
                                                        <input type="text" id="last-name" class="form-control" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="company-name">Company name</label>
                                                <input type="text" id="company-name" class="form-control" />
                                            </div>
                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="address">Address*</label>
                                                <input type="text" id="address" class="form-control" required />
                                            </div>
                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="email">Email*</label>
                                                <input type="email" id="email" class="form-control" required />
                                            </div>
                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="phone">Phone</label>
                                                <input type="number" id="phone" class="form-control" />
                                            </div>
                                            <div class="form-check mb-4">
                                                <input class="form-check-input" type="checkbox" value="" id="checkoutForm2" />
                                                <label class="form-check-label" for="checkoutForm2">
                                                    Save this information for next time
                                                </label>
                                            </div>
                                            <hr class="my-4" />
                                            <h5 class="mb-4">Payment</h5>
                                            <div class="row mb-4">
                                                <div class="col">
                                                    <div class="form-outline">
                                                        <label class="form-label" for="card-owner">Name on card</label>
                                                        <input type="text" id="card-owner" class="form-control" required />
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="form-outline">
                                                        <label class="form-label" for="card-number">Credit card number</label>
                                                        <input type="text" id="card-number" class="form-control" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mb-4">
                                                <div class="col-3">
                                                    <div class="form-outline">
                                                        <label class="form-label" for="card-expiration">Expiration</label>
                                                        <input type="text" id="card-expiration" class="form-control" required />
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="form-outline">
                                                        <label class="form-label" for="card-cvv">CVV</label>
                                                        <input type="text" id="card-cvv" class="form-control" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <button class="btn btn-primary btn-lg btn-block" type="submit">
                                                Pay
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="card mb-4">
                                    <div class="card-header py-3">
                                        <h5 class="mb-0">Summary</h5>
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                Products
                                                <span>XXX.XX€</span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                                Shipping
                                                <span>XXX.XX€</span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                <div>
                                                    <strong>Total amount</strong>
                                                    <strong>
                                                        <p class="mb-0">(including VAT)</p>
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
