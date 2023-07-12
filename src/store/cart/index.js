import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => [...state, action.payload],
    removeFromCart: (state, action) => state.filter(product => product.name !== action.payload.name)
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

// the above changed the below code to Slice

// function cartReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'ADD':
//       return {
//         ...state,
//         cart: [...state.cart, {
//           name: action.payload.name,
//           price: action.payload.price,
//         }
//         ]
//       }
//     case 'REMOVE':
//       return {
//         ...state,
//         cart: state.cart.filter(product => product.name !== action.payload.name)
//       };
//     default:
//       return state;
//   }
// }

// export default cartReducer;
