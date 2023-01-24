import React, { useState } from 'react';
import inventory from '../utils/inventory';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        const results = inventory.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(results);

    };
    const handleSubmit = (event) => {
        event.preventDefault(); console.log(`Search term: ${searchTerm}`);
        const results = inventory.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(results);
    };

    const style = {
        preview: {
            zIndex: 500,
            width: "30%",
            position: "absolute",
            background: "white",
            border: "1px solid black",
            borderRadius: "4px",
            maxItems: "5",
            fontSize: "70%",
            //scrollBar
            width: "350px",
            height: "1000px",
            overflowY: "scroll",
            scrollbarColor: "rebeccapurple green",
            scrollbarWidth: "thin",
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Chercher un produit ..."
                    value={searchTerm}
                    onChange={handleChange}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button type="submit">Rechercher</button>
                {searchResults.length > 0  && searchTerm.length > 0 &&
                    <div style={style.preview} id='preview'>
                        {searchResults.map(item => (
                            <div onClick={() => window.location = `/product/${item.name.toLowerCase().replace(/ /g, '-')}`} style={style.items} key={item.id}>
                                <h2>{item.name}</h2>
                                <img src={item.image} />
                                <p>Price: {item.price} $</p>
                                <p>Describe: {item.description}</p>
                                <p>Quantity: {item.currentInventory}</p>
                                <br /><hr /><br />
                            </div>
                        ))}
                    </div>
                }

            </form>
        </div>
    );
} export default SearchBar;