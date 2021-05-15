import './collection-item.styles.scss';
import CustomButton from './../custom-button/custom-button.component';
import { addItem } from './../../pages/redux/cart/cart.action';
import { connect } from 'react-redux';

const CollectionItem = (props) => {
    const {imageUrl, name, price} = props.item;
    return (
        <div className='collection-item'>
            <div className='image' style ={{
                    backgroundImage: `url(${imageUrl})`
                }}>
            </div>
            <div className= 'collection-footer'>
                <span className='name'> {name} </span>
                <span className='price'> {price} </span>
            </div>
            <CustomButton inverted onClick={() => props.addItem(props.item)}>ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CollectionItem)