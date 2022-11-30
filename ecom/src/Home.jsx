import React from "react"
import cart from './img/icon-cart.svg'
import logo from './img/logo.png'
import products from './img/products.png'

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
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={products} alt="products" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Lorem ipsum</h5>
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil blanditiis reiciendis, illum provident odio obcaecati.</p>
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={products} alt="products" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Lorem ipsum</h5>
                            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil blanditiis reiciendis, illum provident odio obcaecati.</p>
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}