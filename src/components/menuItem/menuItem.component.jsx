import React from 'react'

import './menuItem.styles.scss'

function MenuItem({ title, imageUrl, linkUrl, size }) {

  return (
    <div className={`${size} menu-item`}>
      <div className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
          }}
      />
      <div className='content'>
          <span className='title'>{title.toUpperCase()}</span>
          <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem
