import React from 'react'

import CollectionItem from '../CollectionItem/CollectionItem.component'

import './CollectionPreview.styles.scss'

function CollectionPreview({...otherCollectionProps}) {
  const { title, items } = otherCollectionProps
  return (
    <div className='collection-preview'>
      <div className='collection-title'>{title.toUpperCase()}</div>
      <div className='items'>
        {
          items.filter((item, idx) => idx < 4).map(({id, ...item}) => <CollectionItem key={id} {...item}/>)
        }
      </div>
    </div>
  )
}

export default CollectionPreview
