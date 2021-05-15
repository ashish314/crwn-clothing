import CollectionOverview from './../../components/collection-overview/collection-overview.component';
import CategoryPage from './../category/category.component';
import {Route, Switch } from 'react-router-dom';
import React from 'react';

const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:categoryId`} component={CategoryPage}></Route>
        </div>
    )
}

export default ShopPage
