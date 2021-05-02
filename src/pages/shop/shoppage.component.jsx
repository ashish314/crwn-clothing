import React from 'react';
import shopData from './shop.data';

import CollectionPreview from  '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: shopData
        }
    }
    render() {
        const {collections} = this.state;
        return (
        <div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionValues}) => {
                    return <CollectionPreview key={id} {...otherCollectionValues}></CollectionPreview>
                })
            }
        </div>
        );
    }
}

export default ShopPage
