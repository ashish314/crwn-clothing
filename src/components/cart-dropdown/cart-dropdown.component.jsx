import './cart-dropdown.styles.scss';

import CustomButton from './../custom-button/custom-button.component';
import CartItem from './../cart-item/cart-item.component';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {toggleDisplayCartDropdown} from './../../pages/redux/cart/cart.action';

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className='cart-dropdown'>
            <div className='items-list'>
                {
                    cartItems.length > 0 ? 
                    cartItems.map((item) => {
                        return <CartItem key={item.id} item={item} />
                    }) :
                    <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleDisplayCartDropdown());
                }}>Go To Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems
    }
}

export default withRouter(connect(mapStateToProps)(CartDropdown))