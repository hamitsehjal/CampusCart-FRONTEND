import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartTax, selectCartTotal, selectCartSubTotal } from '../store/cartSelector';
import { loadStripe } from '@stripe/stripe-js';
import { getCartItems } from 'lib/authenticate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faLocationDot, faExclamationCircle, faArrowLeft } from '@fortawesome/free-solid-svg-icons';  
import { useRouter } from 'next/router';

function OrderSummary() {
  const cartTotal = useSelector(selectCartTotal);
  const cartTax = useSelector(selectCartTax);
  const cartSubTotal = useSelector(selectCartSubTotal);
  const router = useRouter();
  
  // handle submit for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: getCartItems(),
      });

      if (response.ok) {
        console.log('Payment Form Submitted!!');
        const data = await response.json();

        // Redirect to the URL returned by Stripe session
        window.location.href = data.url;
      } else {
        console.log(`Error`, response.status, response.statusText);
      }
    } catch (err) {
      console.log('error', err.message);
    }
  };

  
  // Configure the Stripe Object
  loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  return (
    <div className="flex items-center justify-center mt-8 mb-8 ">
      <div className="shadow-md h-full rounded-lg border bg-white p-8 ">
      <FontAwesomeIcon icon={faArrowLeft} size="lg" className=" text-campus-text cursor-pointer" onClick={() => router.push('/Map')} />
        <div className='flex flex-col items-center'>
        <FontAwesomeIcon icon={faSquareCheck} size="3x" className="mb-4 text-green-900" />
        </div>
      <p className="font-cinzel text-lg font-bold text-campus-text mb-5 text-center">Order Summary</p>
        <div className="flex justify-between mb-4">
          <p className="font-noto_serif font-medium text-campus-text">Subtotal</p>
          <p className="font-noto_serif font-medium text-green-500">${cartSubTotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="font-noto_serif font-medium text-campus-text">Tax</p>
          <p className="font-noto_serif font-medium text-green-500">${cartTax.toFixed(2)}</p>
        </div>
        <hr className="my-3" />
        <div className="flex flex-col justify-between mb-4">
        <div className="flex justify-between"> 
            <p className="font-cinzel font-medium text-campus-text text-lg">Total</p>
            <p className="mb-1 text-lg font-cinzel font-bold text-green-700">${cartTotal.toFixed(2)}</p>
        </div>
          <p className="text-xs font-noto_serif font-medium text-campus-text text-right">*including Tax</p>
          {/* location */}
          <div className='flex items-center ml-8'>
          <FontAwesomeIcon icon={faLocationDot} className="text-campus-red ml-2 mr-1" /> 
          <p className="font-cinzel font-lg mt-6">Customer Pickup Location</p> 
          </div>

          <div className="border p-3 rounded-md my-3">
            <div className="my-1">
              <p className="text-m font-noto_serif text-center text-campus-secondary">{localStorage.getItem('location')}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
      <p className="font-noto_serif text-xs text-campus-text mr-1 ml-9">Review the information carefully before checkout</p>
      <FontAwesomeIcon icon={faExclamationCircle} className="text-campus-red ml-2" /> 
        </div>
        <form onSubmit={handleSubmit}>
          <button className="font-noto_serif font-medium text-white mt-3 w-full rounded-full bg-campus-red py-2 hover:bg-campus-accent">
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrderSummary;
