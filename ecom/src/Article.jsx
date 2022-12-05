import React from "react"
import cart from './img/icon-cart.svg'
import logo from './img/logo.png'
import products from './img/products.png'
import motherboard from './img/motherboard.png'
import facebook from './img/facebook.svg'
import linkedin from './img/linkedin.svg'
import twitter from './img/twitter.svg'

export const Article = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="logo" width="200" />
                    </a>
                    <form className="d-flex" role="search">
                        <input type="text" className="form-control me-2" placeholder="Search" />
                        <button class="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <img src={cart} alt="cart" width="30" />
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
            <main className="d-flex flex-column align-items-center">
                <h1>Carte mère pour minage composant PC</h1>
                <div id="about" className="display d-flex justify-content-around align-items-center">
                    <img src={motherboard} className="img-thumbnail" alt="motherboard" />
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate fugiat deleniti nobis deserunt placeat.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellendus hic veniam voluptate. Vero optio aut rerum, nulla et velit temporibus vitae officia modi. Fugit earum tempora tenetur. Dolorem, impedit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore provident saepe consequatur excepturi voluptas optio eos quaerat mollitia cupiditate cumque sint cum voluptatum rem, quam libero adipisci omnis, aut fugit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, iure qui, commodi laborum error distinctio fugit eum nemo magni ullam tempore cumque maiores voluptates facilis a possimus rem ipsa voluptatum ipsum laudantium quam laboriosam. Optio totam modi officia libero nihil quo at deleniti repellat necessitatibus!</p>
                    </div>
                </div>
                <div className="control d-flex justify-content-center align-items-center">
                    <span id="price">160.00€</span>
                    <span className="bg-light">    
                        <button id="add" className="btn btn-secondary">-</button>
                        <span id="quantity">1</span>
                        <button id="remove" className="btn btn-secondary">+</button>
                    </span>
                    <button id="basket" className="btn btn-secondary">Ajouter au panier</button>
                </div>
            </main>
        </>
    );
}