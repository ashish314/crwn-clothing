import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryMenuReducer from './directoryMenu/directoryMenu.reducer';
import shopReducer from './shop/shop.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['cart', 'directoryMenu', 'shopData']
};

const rootReducer =  combineReducers({
    user: userReducer,
    cart: cartReducer,
    directoryMenu: directoryMenuReducer,
    shopData: shopReducer
});

export default persistReducer(persistConfig, rootReducer);