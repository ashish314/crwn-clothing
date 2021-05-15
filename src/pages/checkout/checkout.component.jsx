import './checkout.styles.scss';

import {connect} from 'react-redux';
import {cartTotalAmount, selectCartItems} from './../../pages/redux/cart/cart.selector';
import CheckoutItem from './../../components/checkout-item/checkout-item.component';

const Checkout = ({cartItems, total, dispatch}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='checkout-block'>
                    <span>Product</span>
                </div>
                <div className='checkout-block'>
                    <span>Description</span>
                </div>
                <div className='checkout-block'>
                    <span>Quantity</span>
                </div>
                <div className='checkout-block'>
                    <span>Price</span>
                </div>
                <div className='checkout-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item => <CheckoutItem key={item.id} cartItem={item}/>)
            }
            <div className='total'>Total: ${total}</div>
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        total: cartTotalAmount(state),
        cartItems: selectCartItems(state)
    }
)

export default connect(mapStateToProps)(Checkout)

