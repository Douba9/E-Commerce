import React from "react"
import cart from './img/icon-cart.svg'
import logo from './img/logo.png'

export const Home = () => {
    return (
        <>
            <nav>
                <div className="left">
                    <a href="#">Products</a>
                    <a href="#">About</a>
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
                
            </main>
        </>
    );
}