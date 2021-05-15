export const addItemToCart = (existingCart, itemToAdd) => {
    const isExistingItem = existingCart.find((item) => item.id === itemToAdd.id);

    if(isExistingItem) {
        return existingCart.map((item) => (
            item.id === itemToAdd.id ? {...itemToAdd, quantity: item.quantity + 1} : item
        ))
    }
    return [...existingCart, {...itemToAdd, quantity: 1}]
}