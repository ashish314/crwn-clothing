import './header.styles.scss';
import {ReactComponent as Logo } from '../../assets/crown.svg';
import {Link} from  'react-router-dom';
import {auth} from './../firebase/firebase.utils';
import {connect} from 'react-redux';

import CartIcon from './../cart-icon/cart-icon.component';
import CartDropdown from './../cart-dropdown/cart-dropdown.component';

const handleClick = (e) => {
    console.log("click captured");
}

const Header = (props) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className= 'options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>Contact</Link>
            {
                props.currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>Sign out</div> :
                <Link className='option' to='/signin'>Sign In</Link>
            }
            <CartIcon></CartIcon>
            </div>
            {
                props.cart.hidden ? null : <CartDropdown />
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Header)

