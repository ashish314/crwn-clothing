import './collection-item.styles.scss';
import CustomButton from './../custom-button/custom-button.component';

const CollectionItem = ({imageUrl, name, price}) => {
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
            <CustomButton inverted>ADD TO CART</CustomButton>
        </div>
    )
}

export default CollectionItem