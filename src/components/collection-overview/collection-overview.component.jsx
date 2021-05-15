import './collection-overview.styles.scss';
import CollectionPreview from './../collection-preview/collection-preview.component';
import {connect} from 'react-redux';

const CollectionOverview = ({collectionValues}) => {
    console.log("here", collectionValues);
    return (
        <div className='collection-overview'>
            {
                collectionValues.map(({id, ...otherCollectionValues}) => {
                    return <CollectionPreview key={id} {...otherCollectionValues}></CollectionPreview>
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        collectionValues: state.shopData.data
    }
}

export default connect(mapStateToProps)(CollectionOverview);