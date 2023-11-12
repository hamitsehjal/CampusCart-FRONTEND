// store/cartSelector.js

// selectCartItems
export const selectCartItems = (state) => [...state.cart.items.values()];

function calculateSum(items) {
  return items.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0)
}

// selectCartSubTotal
export const selectCartSubTotal = (state) => {
  return calculateSum([...state.cart.items.values()]);
}


// selectCartTax
export const selectCartTax = (state) => {
  const sum = calculateSum([...state.cart.items.values()]);

  return 0.13 * sum;
}

// selectCartTotal
export const selectCartTotal = (state) => {
  const sum = calculateSum([...state.cart.items.values()]);

  return (sum + (0.13 * sum));
}