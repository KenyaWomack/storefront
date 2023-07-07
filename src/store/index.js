import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducer from './reducer';
import cartReducer from './cart';

const reducers = combineReducers({
  store: reducer,
  cart: cartReducer
});

const store = () => createStore(reducers, composeWithDevTools());

export default store();
