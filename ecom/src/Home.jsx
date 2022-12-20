import React from 'react';
import cart from './img/icon-cart.svg';
import logo from './img/logo.png';
import products from './img/products.png';
import motherboard from './img/motherboard.png';
import facebook from './img/facebook.svg';
import linkedin from './img/linkedin.svg';
import twitter from './img/twitter.svg';

export const Home = () => {
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
            <main>
                <nav className="mt-2" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="card">
                        <img src={products} alt="products" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Lorem ipsum</h5>
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil blanditiis reiciendis, illum provident odio obcaecati.</p>
                            <a href="#">
                                <button className="btn btn-primary">Details</button>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={products} alt="products" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Lorem ipsum</h5>
                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo pariatur, deleniti minus nesciunt officia quia?</p>
                            <a href="#">
                                <button className="btn btn-primary">Details</button>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={products} alt="products" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Lorem ipsum</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi velit necessitatibus odio. Recusandae, at placeat!</p>
                            <a href="#">
                                <button className="btn btn-primary">Details</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card">
                        <img src={motherboard} alt="motherboard" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Lorem ipsum</h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, fuga perspiciatis! Ut doloribus ex nostrum!</p>
                            <a href="#">
                                <button className="btn btn-primary">Details</button>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={motherboard} alt="motherboard" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Lorem ipsum</h5>
                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab architecto facilis libero error delectus possimus.</p>
                            <a href="#">
                                <button className="btn btn-primary">Details</button>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={motherboard} alt="motherboard" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Lorem ipsum</h5>
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quo odit, voluptatem nihil voluptas recusandae.</p>
                            <a href="#">
                                <button className="btn btn-primary">Details</button>
                            </a>
                        </div>
                    </div>
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
}
