import React, { useState } from 'react';

function ShippingForm() {
  const [country, setCountry] = useState('');
  const [weight, setWeight] = useState(0);
  const [size, setSize] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);

  const handleSubmit = event => {
    event.preventDefault();

    // Récupérer les frais de port en fonction du pays, du poids et de la taille de l'article
    fetch(`/shipping?country=${country}&weight=${weight}&size=${size}`)
      .then(response => response.json())
      .then(data => {
        setShippingCost(data.cost);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="country">Pays de destination :</label>
      <select id="country" value={country} onChange={event => setCountry(event.target.value)}>
        <option value="US">États-Unis</option>
        <option value="CA">Canada</option>
        </select>
        
        <form onSubmit={handleSubmit}>
        <h3>Delivery Address</h3>
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={deliveryAddress.country}
            onChange={handleDeliveryAddressChange}
          />
        </label>
        <br />
        <label>
          Postal Code:
          <input
            type="text"
            name="postalCode"
            value={deliveryAddress.postalCode}
            onChange={handleDeliveryAddressChange}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            name="city"
            value={deliveryAddress.city}
            onChange={handleDeliveryAddressChange}
          />
        </label>
        <br />
        <label>
          Street:
          <input
            type="text"
            name="street"
            value={deliveryAddress.street}
            onChange={handleDeliveryAddressChange}
          />
        </label>
        <br />
        <label>
          House Type:
          <select
            name="houseType"
            value={deliveryAddress.houseType}
            onChange={handleDeliveryAddressChange}
          >
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
          </select>
        </label>
        <h3>Billing Address</h3>
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={billingAddress.country}
            onChange={handleBillingAddressChange}
          />
        </label>
        <br />
        
          Postal Code:
          <input
            type="text"
            name="postalCode" />
            
         </form>  

         </form>
        )
};