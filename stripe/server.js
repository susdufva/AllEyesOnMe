// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
require("dotenv").config()
const stripe = require('stripe')(process.env.STRIPE_KEY);
const express = require('express');
const app = express();
app.use(express.static('public'));
import { CartContext } from "../src/components/CartContext";
import { useContext } from "react";
const { cart} = useContext(CartContext);


const YOUR_DOMAIN = 'http://localhost:3000';

//endpoint for axios request
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [  cart.map((item) => ({
        price_data: {
            price: item.price,
            currency: 'sek',
            product_data: {
              name: item.name,
            },
          },
          quantity: cart.length,
        })),
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/confirmation`, //redirect here after success
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
  //res.json({ id: session.id });
});

app.listen(4242, () => console.log('Running on port 4242'));