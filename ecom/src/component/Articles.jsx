import React from "react";
import cart from '../img/icon-cart.svg';
import logo from '../img/logo.png';
import products from '../img/products.png';
import motherboard from '../img/motherboard.png';
import facebook from '../img/facebook.svg';
import linkedin from '../img/linkedin.svg';
import twitter from '../img/twitter.svg';
import branded from '../img/branded.png';

export const Article = (props) => {
    return (
        <div className="Article">
            <main className="d-flex flex-column align-items-center">
                <button onClick={() => {
                    window.location.reload(false);
                }} className="btn btn-danger">X</button>
                <h1>{props.name}</h1>
                <div id="about" className="display d-flex justify-content-around align-items-center">
                    <img src={props.image} className="img-thumbnail" alt="motherboard" />
                    <div>
                        {props.detail}
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate fugiat deleniti nobis deserunt placeat.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellendus hic veniam voluptate. Vero optio aut rerum, nulla et velit temporibus vitae officia modi. Fugit earum tempora tenetur. Dolorem, impedit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore provident saepe consequatur excepturi voluptas optio eos quaerat mollitia cupiditate cumque sint cum voluptatum rem, quam libero adipisci omnis, aut fugit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, iure qui, commodi laborum error distinctio fugit eum nemo magni ullam tempore cumque maiores voluptates facilis a possimus rem ipsa voluptatum ipsum laudantium quam laboriosam. Optio totam modi officia libero nihil quo at deleniti repellat necessitatibus!</p> */}
                    </div>
                </div>
                <div className="control d-flex justify-content-center align-items-center">
                    <span id="price">{props.price}</span>
                    <button id="basket" className="btn btn-primary" onClick={() => {
                        
                    }}>Ajouter au panier</button>
                </div>
                <div id="specs" className="display d-flex justify-content-around align-items-center">
                    <table className="table table-striped text-center">
                        <tbody>
                            <tr>
                                <th scope="row">En stock</th>
                                <td>{props.stock}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}