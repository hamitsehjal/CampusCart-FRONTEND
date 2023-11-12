// store/cartSelector.js

// selectCartItems
export const selectCartItems = (state) => state.cart.items;

// selectCartItemById
export const selectCartItemById = (state, itemId) => {
  const allItems = selectCartItems(state);

  const item = allItems.find(item => item.id === itemId);

  return item || null;
}
function calculateSum(items) {
  return items.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0)
}

// selectCartSubTotal
export const selectCartSubTotal = (state) => {
  return calculateSum(state.cart.items);
}


// selectCartTax
export const selectCartTax = (state) => {
  const sum = calculateSum(state.cart.items);

  return 0.13 * sum;
}

// selectCartTotal
export const selectCartTotal = (state) => {
  const sum = calculateSum(state.cart.items);

  return (sum + (0.13 * sum));
}