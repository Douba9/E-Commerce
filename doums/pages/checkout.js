import React, { useState, useRef } from 'react'
import Head from 'next/head'
import { SiteContext, ContextProviderComponent } from "../context/mainContext"
import DENOMINATION from "../utils/currencyProvider"
import { FaLongArrowAltLeft } from "react-icons/fa"
import Link from "next/link"
import Image from "../components/Image"
import { v4 as uuid } from "uuid"

import {
  CardElement,
  Elements,
  useElements,
} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const mailgun = require("mailgun-js");
const DOMAIN = 'sandboxcc74cdb0565940b496dae5a7e438bd9b.mailgun.org';
const apiKey = "fccab358716e02e7914da798864b8d33-4c2b2223-842e4af7"
const mg = mailgun({ apiKey: apiKey, domain: DOMAIN });


const stripePromise = loadStripe("no ref bro")

function CheckoutWithContext(props) {
  return (
    <ContextProviderComponent>
      <SiteContext.Consumer>
        {context => (
          <Elements stripe={stripePromise}>
            <Checkout {...props} context={context} />
          </Elements>
        )}
      </SiteContext.Consumer>
    </ContextProviderComponent>
  )
}



const calculateShipping = () => {
  return 0
}

const Input = ({ onChange, value, name, placeholder }) => (
  <input
    onChange={onChange}
    value={value}
    className="mt-2 text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    type="text"
    placeholder={placeholder}
    name={name}
  />
)

const Checkout = ({ context }) => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [orderCompleted, setOrderCompleted] = useState(false)
  const defaultInput = {
    name: "",
    email: "",
    street: "",
    city: "",
    postal_code: "",
    state: "",
    more_information: "",
    crypto_link: "",
  }
  const [input, setInput] = useState(defaultInput)
  const form = useRef();

  const elements = useElements()

  const onChange = (e) => {
    setErrorMessage(null)
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { name, email, street, city, postal_code, state, more_information, crypto_link } = input
    setInput(defaultInput)
    const { total, clearCart } = context

    // Validate input
    if (!street || !city || !postal_code || !state || !more_information || !crypto_link || !name || !email) {
      setErrorMessage("Please fill in the form!")
      return
    }


    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement)

    const order = {
      email,
      amount: total,
      address: { street, city, postal_code, state },
      id: uuid(),
    }

    const complet = [order, cart, input]



    const cartExtract = JSON.stringify(cart);


    const items = complet[1].map(item => {
      return { name: item.name, price: item.price };
    });
    console.log(items);

    console.log(complet);

    const tableRows = complet[1].map((item) => {
      return `<tr>
      <td>${item.name}</td>
      <td class="alignright">$ ${item.price}</td>
    </tr>`
    });

    const tableContent = tableRows.join("");

    //mailer
    const data = {
      from: 'Excited User cousicousa59@gmail.com',
      to: 'cousicousa59@gmail.com',
      subject: order.email,
      html:
        `< !DOCTYPE html >
        <html style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
          <head>
            <meta name="viewport" content="width=device-width" />
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>bon de commande</title>
      
            <style type="text/css">
              img {
                max - width: 100%;
            }
              body {
                -webkit - font - smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em;
            }
              body {
                background - color: #f6f6f6;
            }
              @media only screen and (max-width: 640px) {
                body {
                padding: 0 !important;
              }
              h1 {
                font - weight: 800 !important; margin: 20px 0 5px !important;
              }
              h2 {
                font - weight: 800 !important; margin: 20px 0 5px !important;
              }
              h3 {
                font - weight: 800 !important; margin: 20px 0 5px !important;
              }
              h4 {
                font - weight: 800 !important; margin: 20px 0 5px !important;
              }
              h1 {
                font - size: 22px !important;
              }
              h2 {
                font - size: 18px !important;
              }
              h3 {
                font - size: 16px !important;
              }
              .container {
                padding: 0 !important; width: 100% !important;
              }
              .content {
                padding: 0 !important;
              }
              .content-wrap {
                padding: 10px !important;
              }
              .invoice {
                width: 100% !important;
              }
            }
            </style>
          </head>
      
          <body itemscope itemtype="http://schema.org/EmailMessage"
            style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6">
      
            <table class="body-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
              <td class="container" width="600" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;" valign="top">
                <div class="content" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">
                  <table class="main" width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; border: 1px solid #e9e9e9;" bgcolor="#fff"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-wrap aligncenter" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 20px;" align="center" valign="top">
                    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                      <h1 class="aligncenter" style="font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box; font-size: 32px; color: #000; line-height: 1.2em; font-weight: 500; text-align: center; margin: 40px 0 0;" align="center"> ${total} $</h1>
                    </td>
                    </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                    </td>
                      </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block aligncenter" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top">
                        <table class="invoice" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; text-align: left; width: 80%; margin: 40px auto;"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0;" valign="top">Nom :  ${input.name}<br style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;" />Invoice #12345<br style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;" />Lien de paiment : ${input.crypto_link}</td>
      
      
                        </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0;" valign="top">
                          <table class="invoice-items" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; margin: 0;">
      
      
                            ${tableContent}
      
      
                            <tr class="total" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="alignright" width="80%" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: right; border-top-width: 2px; border-top-color: #333; border-top-style: solid; border-bottom-color: #333; border-bottom-width: 2px; border-bottom-style: solid; font-weight: 700; margin: 0; padding: 5px 0;" align="right" valign="top">Total</td>
                              <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: right; border-top-width: 2px; border-top-color: #333; border-top-style: solid; border-bottom-color: #333; border-bottom-width: 2px; border-bottom-style: solid; font-weight: 700; margin: 0; padding: 5px 0;" align="right" valign="top">${total} $</td>
                            </tr></table></td>
                          </tr></table></td>
                      </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block aligncenter" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top">
                        <a href="http://www.mailgun.com" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #348eda; text-decoration: underline; margin: 0;">View in browser</a>
                      </td>
                      </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block aligncenter" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top">
                        Acme Inc. 2023 Trevor Familly CBDax Facture
                      </td>
                      </tr></table></td>
                  </tr></table>
                </div>
              </td>
              <td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
            </tr></table></body>
        </html>`

    };

    mg.messages().send(data, function (error, body) {
      console.log(body);
    });



  }

  const { numberOfItemsInCart, cart, total } = context
  const cartEmpty = numberOfItemsInCart === Number(0)

  if (orderCompleted) {
    return (
      <div>
        <h3>Thanks! Your order has been successfully processed.</h3>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center pb-10">
      <Head>
        <title>Trevor Familly - Checkout</title>
        <meta name="description" content={`Check out`} />
        <meta property="og:title" content="Trevor Familly - Checkpit" key="title" />
      </Head>
      <div
        className="
            flex flex-col w-full
            c_large:w-c_large
          "
      >
        <div className="pt-10 pb-8">
          <h1 className="text-5xl font-light mb-6">Checkout</h1>
          <Link href="/cart" aria-label="Cart">

            <div className="cursor-pointer flex  items-center">
              <FaLongArrowAltLeft className="mr-2 text-gray-600" />
              <p className="text-gray-600 text-sm">Edit Cart</p>
            </div>

          </Link>
        </div>

        {cartEmpty ? (
          <h3>No items in cart.</h3>
        ) : (
          <div className="flex flex-col">
            <div className="">
              {cart.map((item, index) => {
                return (
                  <div className="border-b py-10" key={index}>
                    <div className="flex items-center">
                      <Image
                        className="w-32 m-0"
                        src={item.image}
                        alt={item.name}
                      />
                      <p className="m-0 pl-10 text-gray-600">
                        {item.name}
                      </p>
                      <div className="flex flex-1 justify-end">
                        <p className="m-0 pl-10 text-gray-900 font-semibold">
                          {DENOMINATION + item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="flex flex-1 flex-col md:flex-row">
              <div className="flex flex-1 pt-8 flex-col">
                <div className="mt-4 border-t pt-10">
                  <form ref={form} onSubmit={handleSubmit}>
                    {errorMessage ? <span>{errorMessage}</span> : ""}
                    <Input
                      onChange={onChange}
                      value={input.crypto_link}
                      name="crypto_link"
                      placeholder="crypto_link"
                    />
                    <Input
                      onChange={onChange}
                      value={input.name}
                      name="name"
                      placeholder="Owner name"
                    />
                    {/* <CardElement className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" /> */}
                    <Input
                      onChange={onChange}
                      value={input.email}
                      name="email"
                      placeholder="Email"
                    />
                    <Input
                      onChange={onChange}
                      value={input.street}
                      name="street"
                      placeholder="Street"
                    />
                    <Input
                      onChange={onChange}
                      value={input.city}
                      name="city"
                      placeholder="City"
                    />
                    <Input
                      onChange={onChange}
                      value={input.state}
                      name="state"
                      placeholder="State"
                    />
                    <Input
                      onChange={onChange}
                      value={input.postal_code}
                      name="postal_code"
                      placeholder="Postal Code"
                    />
                    <Input
                      onChange={onChange}
                      value={input.more_information}
                      name="more_information"
                      placeholder="More information : like n° gate , floor and more"
                    />
                    <button
                      type="submit"
                      className="hidden md:block bg-primary hover:bg-black text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Confirm order
                    </button>
                  </form>
                </div>
              </div>
              <div className="md:pt-20">
                <div className="pl-4 flex flex-1 pt-2 md:pt-8 mt-2 sm:mt-0">
                  <p className="text-sm pr-10 text-left">Subtotal</p>
                  <p className="w-38 flex text-right justify-end">
                    {DENOMINATION + total}
                  </p>
                </div>
                <div className="pl-4 flex flex-1 my-2">
                  <p className="text-sm pr-10">Shipping</p>
                  <p className="w-38 flex justify-end">
                    FREE SHIPPING : MIN ORDER 50$
                  </p>
                </div>
                <div className="md:ml-4 pl-2 flex flex-1 bg-gray-200 pr-4 pb-1 pt-2 mt-2">
                  <p className="text-sm pr-10">Total</p>
                  <p className="font-semibold w-38 flex justify-end">
                    {DENOMINATION + (total + calculateShipping())}
                  </p>
                </div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="md:hidden bg-primary hover:bg-black text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Confirm order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutWithContext