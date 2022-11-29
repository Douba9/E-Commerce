import React from "react"
import cart from './img/icon-cart.svg'

export const Home = () => {
    return (
        <>
            <nav>
                <div className="left">
                    <a href="#">Products</a>
                    <a href="#">About</a>
                </div>
                <div className="mid">
                    {/* Substitution temporaire à remplacer à l'avenir par le logo */}
                    <div className="logo"></div>
                </div>
                <div className="right">
                    <button>
                        <img src={cart} width="50"></img>
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