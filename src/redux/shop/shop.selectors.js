import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'

const selectShop = state => state.shop

const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)

const selectCollection = memoize(collectionUrlParam => 
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]))



export { selectCollections, selectCollection, selectCollectionsForPreview }