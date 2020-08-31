import React from 'react'

import './collectionsOverview.styles.scss'

import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import CollectionPreview from '../CollectionPreview/CollectionPreview.component'
import { selectCollections } from '../../redux/shop/shop.selectors'

function CollectionsOverview({ collections }) {
  return (
    <div className='collections-overview'>
        {
          collections.map(({ id, ...otherCollectionProps }) => <CollectionPreview key={id} {...otherCollectionProps} />)
        }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})



export default connect(mapStateToProps)(CollectionsOverview)
