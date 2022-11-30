import React from "react"
import cart from './img/icon-cart.svg'
import logo from './img/logo.png'
import products from './img/products.png'
import motherboard from './img/motherboard.png'

export const Home = () => {
    return (
        <>
            <nav>
                <div className="left">
                    <a href="#">Products</a>
                    <a href="#">About</a>
                    <form onSubmit={() => { return false; }}>
                        <input type="text" placeholder="Search"/>
                        <input type="button" value="Search"/>
                    </form>
                </div>
                <div className="mid">
                    <a className="logo" href="#">
                        <img className="logo" src={logo}></img>
                    </a>
                </div>
                <div className="right">
                    <button>
                        <img src={cart} width="30"></img>
                    </button>
                    <a href="#">Log in</a>
                    <a href="#">Register</a>
                </div>
            </nav>
            <main>
                <div className="row">
                    <div className="card">
                        <img src={products} alt="products" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Lorem ipsum</h5>
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil blanditiis reiciendis, illum provident odio obcaecati.</p>
                            <a href="#">
                                <button className="btn btn-primary">Details</button>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={products} alt="products" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Lorem ipsum</h5>
                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo pariatur, deleniti minus nesciunt officia quia?</p>
                            <a href="#">
                                <button className="btn btn-primary">Details</button>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={products} alt="products" className="card-img-top"/>
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
                        <img src={motherboard} alt="motherboard" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Lorem ipsum</h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, fuga perspiciatis! Ut doloribus ex nostrum!</p>
                            <a href="#">
                                <button className="btn btn-primary">Details</button>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={motherboard} alt="motherboard" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Lorem ipsum</h5>
                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab architecto facilis libero error delectus possimus.</p>
                            <a href="#">
                                <button className="btn btn-primary">Details</button>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={motherboard} alt="motherboard" className="card-img-top"/>
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
        </>
    );
}