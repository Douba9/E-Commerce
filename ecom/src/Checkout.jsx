import React from 'react';
import cart from './img/icon-cart.svg';
import logo from './img/logo.png';
import products from './img/products.png';
import motherboard from './img/motherboard.png';
import facebook from './img/facebook.svg';
import linkedin from './img/linkedin.svg';
import twitter from './img/twitter.svg';
import paypal from './img/paypal.svg';
import mastercard from './img/mastercard.svg';

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
                                                        <input type="text" id="form6Example1" class="form-control" />
                                                        <label class="form-label" for="form6Example1">First name</label>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="form-outline">
                                                        <input type="text" id="form6Example2" class="form-control" />
                                                        <label class="form-label" for="form6Example2">Last name</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-outline mb-4">
                                                <input type="text" id="form6Example3" class="form-control" />
                                                <label class="form-label" for="form6Example3">Company name</label>
                                            </div>
                                            <div class="form-outline mb-4">
                                                <input type="text" id="form6Example4" class="form-control" />
                                                <label class="form-label" for="form6Example4">Address</label>
                                            </div>
                                            <div class="form-outline mb-4">
                                                <input type="email" id="form6Example5" class="form-control" />
                                                <label class="form-label" for="form6Example5">Email</label>
                                            </div>
                                            <div class="form-outline mb-4">
                                                <input type="number" id="form6Example6" class="form-control" />
                                                <label class="form-label" for="form6Example6">Phone</label>
                                            </div>
                                            <hr class="my-4" />
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="checkoutForm1" />
                                                <label class="form-check-label" for="checkoutForm1">
                                                    Shipping address is the same as my billing address
                                                </label>
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
                                                        <input type="text" id="formNameOnCard" class="form-control" />
                                                        <label class="form-label" for="formNameOnCard">Name on card</label>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="form-outline">
                                                        <input type="text" id="formCardNumber" class="form-control" />
                                                        <label class="form-label" for="formCardNumber">Credit card number</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mb-4">
                                                <div class="col-3">
                                                    <div class="form-outline">
                                                        <input type="text" id="formExpiration" class="form-control" />
                                                        <label class="form-label" for="formExpiration">Expiration</label>
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="form-outline">
                                                        <input type="text" id="formCVV" class="form-control" />
                                                        <label class="form-label" for="formCVV">CVV</label>
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
                                                <span>$XXX.XX</span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                                Shipping
                                                <span>Gratis</span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                <div>
                                                    <strong>Total amount</strong>
                                                    <strong>
                                                        <p class="mb-0">(including VAT)</p>
                                                    </strong>
                                                </div>
                                                <span><strong>$XXX.XX</strong></span>
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
