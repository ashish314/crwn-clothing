import './category.styles.scss';
import {connect} from 'react-redux';

import { selectCategory } from './../redux/shop/shop.selector';
import CollectionItem from './../../components/collection-item/collection-item.component';

const CategoryPage = ({category}) => {
    const {title,id,items} = category;
    return (
        <div className='category-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map((item) => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => (
    {
        category: selectCategory(ownProps.match.params.categoryId)(state)
    }
);

export default connect(mapStateToProps)(CategoryPage)