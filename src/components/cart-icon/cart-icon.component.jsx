import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from './../../assets/shopping-bag.svg';
import { toggleDisplayCartDropdown } from './../../pages/redux/cart/cart.action';
import {connect} from 'react-redux';

const CartIcon = (props) => {
    return (
        <div className='cart-icon'>
            <ShoppingIcon className='shopping-icon' onClick={props.toggleDisplayCartDropdown}/>
            <span className='item-count'>0</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDisplayCartDropdown: () => dispatch(toggleDisplayCartDropdown())
    }
}

export default connect(null,mapDispatchToProps)(CartIcon)