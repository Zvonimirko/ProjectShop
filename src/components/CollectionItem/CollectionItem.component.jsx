import React from 'react'

import './CollectionItem.styles.scss'

function CollectionItem({...item}) {
  console.log(item)
  const { name, imageUrl, price } = item
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})`}} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      {/* <button className='custom-button'>Click</button> */}
    </div>
  )
}

export default CollectionItem