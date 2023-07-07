import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';

// Combine reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  // Other reducers...
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;
