import React from "react"
import cart from './img/icon-cart.svg'
import logo from './img/logo.png'
import products from './img/products.png'
import motherboard from './img/motherboard.png'
import facebook from './img/facebook.svg'
import linkedin from './img/linkedin.svg'
import twitter from './img/twitter.svg'
import branded from './img/branded.png'

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
                            <button className="btn">
                                <img src={cart} alt="cart" width="30" />
                            </button>
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
                        <button id="add" className="btn btn-primary">-</button>
                        <span id="quantity">1</span>
                        <button id="remove" className="btn btn-primary">+</button>
                    </span>
                    <button id="basket" className="btn btn-primary">Ajouter au panier</button>
                </div>
                <div id="specs" className="display d-flex justify-content-around align-items-center">
                    <img src={branded} className="img-thumbnail" alt="branded" />
                    <table className="table table-striped text-center">
                        <thead>
                            <tr>
                                <th scope="col" colSpan="2">Spécifications</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Modèle</th>
                                <td>BTC-S37</td>
                            </tr>
                            <tr>
                                <th scope="row">Taille</th>
                                <td>575&#215;195mm</td>
                            </tr>
                            <tr>
                                <th scope="row">Couleur</th>
                                <td>Noir + bleu</td>
                            </tr>
                            <tr>
                                <th scope="row">Mémoire</th>
                                <td>1 &#215; emplacement DDR3 Sodimm, prise en charge 1066/1333/1600mhz</td>
                            </tr>
                            <tr>
                                <th scope="row">Stockage</th>
                                <td>1 &#215; SATA3.0 + 1 &#215; SATA2.0 + 1 &#215; m SATA2.0</td>
                            </tr>
                            <tr>
                                <th scope="row">USB</th>
                                <td>4 USB2.0</td>
                            </tr>
                            <tr>
                                <th scope="row">Port réseau</th>
                                <td>Gigabit RJ45</td>
                            </tr>
                            <tr>
                                <th scope="row">Ports extensibles</th>
                                <td>8 &#215; prise d'alimentation PCIE 16X, 8 &#215; 6 PIN PCIE X16, compatible HDMI + VGA</td>
                            </tr>
                        </tbody>
                    </table>
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
                            <img src={facebook} alt="facebook" width="30"/>
                        </a>
                        <a href="#">
                            <img src={linkedin} alt="linkedin" width="30"/>
                        </a>
                        <a href="#">
                            <img src={twitter} alt="twitter" width="30"/>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}