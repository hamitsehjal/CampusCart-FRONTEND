const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);


export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Retrieve cart items from request body
      const cartItems = req.body;

      console.log("Cart Items:", cartItems);

      /** 
      Create Stripe Products from Cart Items
      Check out official Stripe Docs: https://stripe.com/docs/api/products/create
      - array for storing product
      - function to create a singe product
      - returns product id  
      */
      const products = await Promise.all(cartItems.map(async (item) => {
        const product = await stripe.products.create({
          name: item.name,
          description: item.description,
          images: [item.image],
        });
        return {
          id: product.id,
          quantity: item.quantity,
          price: (item.price * 100),
        };
      }));
      console.log("Products: ", products);
      /** 
      Create Stripe Prices from Products
      Check out official Stripe Docs: https://stripe.com/docs/api/prices/create
      - array for storing prices ids
      - function to create a singe product
      - returns product id  
      */

      const lineItems = await Promise.all(products.map(async (item) => {
        const data = await stripe.prices.create({
          product: item.id,
          unit_amount: item.price,
          currency: 'cad'
        });
        return {
          price: data.id,
          quantity: item.quantity,
        }
      }));

      console.log(lineItems);

      // Create checkout Session

      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/order-confirmation`,
        cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cart`,
      })
      res.json({ url: session.url });


    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }
}
