import {addItemToCart} from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}
const cartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case 'TOGGLE_DISPLAY_CART_DROPDOWN':
            return {
                ...state,
                hidden: !state.hidden
            }
        
        case 'ADD_ITEM':
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        
        case 'REMOVE_CART_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload.id)
            }
        
        case 'DECREMENT_QUANTITY':
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => {
                    if(item.id === action.payload.id){
                        if(item.quantity === 1)
                            return false
                    }
                    return true;
                }).map(item => ( item.id === action.payload.id ? {...item, quantity: item.quantity -1} : item))
            }
        default:
            return state;
    }
}

export default cartReducer