export const toggleDisplayCartDropdown = () => {
    return {
        type: 'TOGGLE_DISPLAY_CART_DROPDOWN'
    }
}

export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: item
    }
}

export const decrementQuantity= (item) => {
    return {
        type: 'DECREMENT_QUANTITY',
        payload: item
    }
}

export const removeCartItem = (item) => {
    return {
        type: 'REMOVE_CART_ITEM',
        payload: item
    }
}
