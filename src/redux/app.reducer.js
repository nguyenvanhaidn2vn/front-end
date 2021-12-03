import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';
import productReducer from './product/product.reducer'
const persistConfig = {
  key: 'quoality-guest',
  storage,
  whitelist: ['cart','user','products'],
};

const appReducer = combineReducers({
  cart: cartReducer,
  user:userReducer,
  products:productReducer
});

export default persistReducer(persistConfig, appReducer);
