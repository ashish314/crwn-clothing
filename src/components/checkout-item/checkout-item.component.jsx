import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { removeCartItem, decrementQuantity, addItem } from './../../pages/redux/cart/cart.action';

const CheckoutItem = ({cartItem, removeCartItem, decrementQuantity, addItem}) => (
    <div className='checkout-item'>
        <div className='image-container'>
        <img src={cartItem.imageUrl} alt="item"/>
        </div>
        <span className='name'>{cartItem.name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => decrementQuantity(cartItem)}> &#10094;</div>
            <span className='value'>{cartItem.quantity}</span>
            <div className='arrow' onClick={() => addItem(cartItem)}> &#10095;</div>
        </span>
        <span className='price'>{cartItem.price}</span>
        <div className='remove' onClick={() => removeCartItem(cartItem)}> &#10005;</div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    removeCartItem: (item) => dispatch(removeCartItem(item)),
    decrementQuantity: (item) => dispatch(decrementQuantity(item)),
    addItem: (item) => dispatch(addItem(item))
});

// const mapStateToProps = (state) => (
//     {
//         cartItems: selectCartItems(state)
//     }
// )
export default connect(null, mapDispatchToProps)(CheckoutItem);