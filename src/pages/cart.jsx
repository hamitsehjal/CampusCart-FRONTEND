import { loadStripe } from '@stripe/stripe-js'
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTax, selectCartTotal, selectCartSubTotal } from '../store/cartSelector';
import { removeItem, incrementQuantity, decrementQuantity } from '../store/cartSlice';
import Image from 'next/image';
import { useEffect } from 'react';
import { getCartItems, setCartItems } from 'lib/authenticate';
import { useRouter } from 'next/router';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const cartTax = useSelector(selectCartTax);
  const cartSubTotal = useSelector(selectCartSubTotal);

  const router = useRouter();
  useEffect(() => {
    const updateLocalStorage = () => {
      setCartItems(cartItems);
    }
    // Update local storage every time when items in the cart changes
    updateLocalStorage();
  }, [cartItems])
  // handle submit for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push('/Map')
    //   try {
    //     const response = await fetch('/api/checkout_sessions', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: getCartItems(),
    //     })

    //     if (response.ok) {
    //       console.log('Payment Form Submitted!!')
    //       const data = await response.json();

    //       // Redirect to the url returns by Stripe session
    //       window.location.href = data.url;
    //     }
    //     else {
    //       console.log(`Error`, response.status, response.statusText);
    //     }

    //   } catch (err) {
    //     console.log('error', err.message);
    //   }
  }
  // // Configure the Stripe Object
  // loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  return (

    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="text-2xl text-campus-text font-cinzel mb-6 text-center">Cart Items</h1>
      <div className="mx-auto max-w-screen-lg justify-start md:flex md:space-x-4">
        <div className="rounded-lg md:w-2/3 overflow-y-auto max-h-[70vh]">
          {
            cartItems.map((item, index) => {
              return (

                <div
                  key={index}
                  className="h-50 w-100 mr-1 shadow-md justify-between mb-6 rounded-lg bg-white p-6  sm:flex sm:justify-start ">
                  <Image
                    src={item.image}
                    alt="Strawberry Image"
                    width={140}
                    height={140}
                  />
                  <div className="sm:flex sm:w-full sm:justify-between">
                    <div className="font-noto_serif font-medium">
                      <h2 className="text-lg font-cinzel font-bold">{item.name}</h2>
                      <p className="text-sm font-noto_serif">CAD$ {item.price}</p>
                    </div>

                    <div className="flex items-center border-gray-100">
                      <button
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        className="mr-1 cursor-pointer bg-gray-200 rounded-full py-1 px-3 duration-100 hover:bg-campus-blue hover:text-white"
                      >
                        -
                      </button>
                      <span
                        className="h-6 w-10 border rounded-full bg-white text-center text-xs">{item.quantity}</span>
                      <button
                        onClick={() => dispatch(incrementQuantity(item.id))}
                        className="ml-1 cursor-pointer bg-gray-300 rounded-full py-1 px-3 duration-100 hover:bg-campus-blue hover:text-white"
                      >
                        +
                      </button>
                      <div>
                        <button
                          onClick={() => dispatch(removeItem(item.id))}
                          className="bg-gray-200 rounded-full py-0 px-2 ml-2 text-black font-bold cursor-pointer hover:bg-campus-red hover:text-white"
                        >
                          x
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              )
            })
          }

        </div>

        <div className="shadow-md mt-0 md:w-1/3 h-full rounded-lg border bg-white p-8">
          <div className="flex justify-between">
            <p className="font-noto_serif font-medium text-black">Subtotal</p>
            <p className="font-noto_serif font-medium text-green-500">{cartSubTotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-noto_serif font-medium text-black">Tax</p>
            <p className="font-noto_serif font-medium text-green-500">{cartTax.toFixed(2)}</p>
          </div>
          <hr className="my-3" />

          <div className="flex justify-between"> 
            <p className="font-cinzel font-medium text-campus-text text-lg">Total</p>
            <p className="mb-1 text-lg font-cinzel font-bold text-green-700">${cartTotal.toFixed(2)}</p>
        </div>
        <p className="text-xs font-noto_serif font-medium text-campus-text text-right">*including Tax</p>
          <form onSubmit={handleSubmit} >
            <button className="font-noto_serif font-medium text-white mt-3 w-full rounded-full bg-campus-red py-2 hover:bg-campus-accent" >Checkout</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cart;
