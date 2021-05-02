import './cart-dropdown.styles.scss';

import CustomButton from './../custom-button/custom-button.component';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='items-list' />
            <CustomButton>Go To Checkout</CustomButton>
        </div>
    )
}

export default CartDropdown