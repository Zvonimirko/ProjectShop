import React from 'react'
import { Link } from 'react-router-dom'  

import './menuItem.styles.scss'

function MenuItem({ title, imageUrl, linkUrl, size }) {

  return (
      <Link className={`${size} menu-item`} to={linkUrl}>
        <div className='background-image'
          style={{
            backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <span className='title'>{title.toUpperCase()}</span>
            <span className='subtitle'>SHOP NOW</span>
        </div>
      </Link>
  )
}

export default MenuItem
