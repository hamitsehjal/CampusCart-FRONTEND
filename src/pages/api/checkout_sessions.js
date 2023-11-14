const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cartSelector';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Get latest items from the Redux Store 'cart' state
      const cartItems = useSelector(selectCartItems);
      console.log(cartItems);


      /** 
      Create Stripe Products from Cart Items
      Check out official Stripe Docs: https://stripe.com/docs/api/products/create
      - array for storing product ids
      - function to create a singe product
      - returns product id  
      */
      const products = cartItems.map(async (item) => {
        const product = await stripe.products.create({
          name: item.name,
          images: [item.image],
        });
        return {
          id: product.id,
          quantity: item.quantity,
          price: (item.price * 1000),
        };
      })
      /** 
      Create Stripe Prices from Products
      Check out official Stripe Docs: https://stripe.com/docs/api/prices/create
      - array for storing prices ids
      - function to create a singe product
      - returns product id  
      */

      const lineItems = products.map(async (item) => {
        const data = await stripe.prices.create({
          product: item.id,
          unit_amount: item.price,
          currency: 'cad'
        });
        return {
          price: data.id,
          quantity: item.quantity,
        }
      });

      console.log(lineItems);

      // Create checkout Session
      await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: `{req.headers.origin}?success=true`,
        cancel_url: `{req.headers.origin}?canceled=true`,
      })
      res.redirect(303, sesson.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }
}