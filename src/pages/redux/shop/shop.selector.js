import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens: 5
};

const selectShop = (state) => state.shopData

export const selectCategories = createSelector(
    selectShop,
    (shopData) => {
        return shopData.data;
    }
);

export const selectCategory = (categoryUrlParam) => createSelector(
    selectCategories,
    (categories) => (
        categories.find((category) => category.id === COLLECTION_ID_MAP[categoryUrlParam])
    )
)