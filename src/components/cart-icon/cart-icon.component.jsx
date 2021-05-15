import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from './../../assets/shopping-bag.svg';
import { toggleDisplayCartDropdown } from './../../pages/redux/cart/cart.action';
import {connect} from 'react-redux';
import { selectCartItemsCount } from './../../pages/redux/cart/cart.selector';

const CartIcon = (props) => {
    return (
        <div className='cart-icon'>
            <ShoppingIcon className='shopping-icon' onClick={props.toggleDisplayCartDropdown}/>
            <span className='item-count'>{props.itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDisplayCartDropdown: () => dispatch(toggleDisplayCartDropdown())
    }
}

const mapStateToProps = (state) => {
    return {
        itemCount: selectCartItemsCount(state)
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)