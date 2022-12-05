 import React from "react"
import cart from './img/icon-cart.svg'
import logo from './img/logo.png'
import products from './img/products.png'
import motherboard from './img/motherboard.png'
import facebook from './img/facebook.svg'
import linkedin from './img/linkedin.svg'
import twitter from './img/twitter.svg'

export const Home = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a class="navbar-brand">
                        <img src={logo} alt="logo" width="200"/>
                    </a>
                    <form className="d-flex" role="search">
                        <input type="text" className="form-control me-2" placeholder="Search"/>
                        <button class="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <img src={cart} alt="cart" width="30"/>
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
            <main>
                <div className="row">
                    <div className="card">
                        <img src={products} alt="products" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Lorem ipsum</h5>
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil blanditiis reiciendis, illum provident odio obcaecati.</p>
                            <a>
                                <button className="btn btn-primary">Details</button>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={products} alt="products" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Lorem ipsum</h5>
                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo pariatur, deleniti minus nesciunt officia quia?</p>
                            <a>
                                <button className="btn btn-primary">Details</button>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={products} alt="products" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Lorem ipsum</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi velit necessitatibus odio. Recusandae, at placeat!</p>
                            <a>
                                <button className="btn btn-primary">Details</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card">
                        <img src={motherboard} alt="motherboard" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Lorem ipsum</h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, fuga perspiciatis! Ut doloribus ex nostrum!</p>
                            <a>
                                <button className="btn btn-primary">Details</button>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={motherboard} alt="motherboard" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Lorem ipsum</h5>
                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab architecto facilis libero error delectus possimus.</p>
                            <a>
                                <button className="btn btn-primary">Details</button>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={motherboard} alt="motherboard" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Lorem ipsum</h5>
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quo odit, voluptatem nihil voluptas recusandae.</p>
                            <a>
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
                        <a>
                            <img src={facebook} alt="facebook" width="30"/>
                        </a>
                        <a>
                            <img src={linkedin} alt="linkedin" width="30"/>
                        </a>
                        <a>
                            <img src={twitter} alt="twitter" width="30"/>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}