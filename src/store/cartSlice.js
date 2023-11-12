import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    /** 
    items is going to be a collection of products, specifically a HashMap that maps unique id to the Product
    Each product will have these properties as these are required on Cart's Page
      - id
      - name
      - quantity
      - price
      - image
      id:{
        id:"sdfsdfdsf",
        name:"strawberries",
        quantity:5,
        price:4,
        image:"www.shoppingcart.com/2323"
      }
    */
    items: new Map(),
  },
  reducers: {
    /** 
    add item to cart
    - we expect to receive a new product object in actions payload
    - We need to keep track of quantity as well.
      - Whenever a new product comes in, we compare up its id with ids of existing product
      - If a match is found, we increment the quantity for that specific product
      - else, add a new product to the items collection
    */
    addItem: (state, action) => {
      const newItem = action.payload;
      const productId = newItem.id;
      if (state.items.has(productId)) {
        // increase the quantity of an existing product
        state.items.get(productId).quantity += 1
      } else {
        // add new product 
        state.items.set(newItem.id, { ...newItem });
      }
    },
    /** 
    remove item from cart
      - We expect to receive the product to be removed 
    */
    removeItem: (state, action) => {
      state.items.delete(action.payload.id);
    },

    // increment quantity
    incrementQuantity: (state, action) => {
      // extract the id of the product
      const productId = action.payload;

      if (store.items.has(productId)) {
        // Item exists, increment its quantity
        state.items.set(productId, {
          ...state.items.get(productId),
          quantity: state.items.get(productId).quantity + 1
        })
      }
    },
    // decrement quantity
    decrementQuantity: (state, action) => {
      // extract the id of the product
      const productId = action.payload;

      if (state.items.has(productId)) {
        // Item exists, decrement the quantity
        state.items.set(productId, {
          ...state.items.get(productId),
          quantity: state.items.get(productId).quantity - 1,
        });
      }
    },

    // clear cart
    clearCart: (state, action) => {
      state.items.clear();
    }
  }
});

// Exporting Cart actions
export const { addItem, removeItem, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;

// Exporting cart reducer 
export default cartSlice.reducer;