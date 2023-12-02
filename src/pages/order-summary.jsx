import React from 'react'
import { useSelector } from 'react-redux';
import { selectCartTax, selectCartTotal, selectCartSubTotal } from '../store/cartSelector';
import { loadStripe } from '@stripe/stripe-js'
import { getCartItems } from 'lib/authenticate';

function orderSummary() {
    const cartTotal = useSelector(selectCartTotal);
    const cartTax = useSelector(selectCartTax);
    const cartSubTotal = useSelector(selectCartSubTotal);
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
            })

            if (response.ok) {
                console.log('Payment Form Submitted!!')
                const data = await response.json();

                // Redirect to the url returns by Stripe session
                window.location.href = data.url;
            }
            else {
                console.log(`Error`, response.status, response.statusText);
            }

        } catch (err) {
            console.log('error', err.message);
        }
    }
    // Configure the Stripe Object
    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


    return (

        <div className="shadow-md mt-0 md:w-1/3 h-full rounded-lg border bg-white p-8">
            <div className="flex justify-between">
                <p className="font-noto_serif font-medium text-black">Subtotal</p>
                <p className="font-noto_serif font-medium text-black">{cartSubTotal}</p>
            </div>
            <div className="flex justify-between">
                <p className="font-noto_serif font-medium text-black">Tax</p>
                <p className="font-noto_serif font-medium text-black">{cartTax}</p>
            </div>
            <hr className="my-3" />
            <div className="flex flex-col justify-between">
                <div>
                    <p className="font-cinzel font-medium text-black text-lg">Total</p>
                    <div className="my-3">
                        <p className="mb-1 text-lg font-cinzel font-bold text-black">{cartTotal}</p>
                        <p className="text-sm font-noto_serif font-medium text-black">including Tax</p>

                    </div>

                </div>
                {/* location */}
                <div>
                    <p className="font-cinzel font-medium text-black text-lg">Location</p>
                    <div className="my-3">
                        <p className="mb-1 text-lg font-cinzel font-bold text-black">{localStorage.getItem('location')}</p>

                    </div>

                </div>
            </div>
            <form onSubmit={handleSubmit} >
                <button className="font-noto_serif font-medium text-white mt-3 w-full rounded-full bg-campus-red py-2 hover:bg-campus-accent" >Check out</button>
            </form>
        </div>
    )
}

export default orderSummary