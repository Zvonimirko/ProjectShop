import React from 'react'
import { connect } from 'react-redux'
import selectSections from '../../redux/directory/directory.selectors'

import MenuItem from '../menuItem/menuItem.component'

import './directory.styles.scss'
import { createStructuredSelector } from 'reselect'

const Directory = ({ sections }) => {
  console.log(sections)
    return (
      <div className='sections'>
        {
          sections.map(({id, ...otherProps}) => <MenuItem key={id} {...otherProps} />)
        }
      </div>
    )
  }

const mapStateToProps = createStructuredSelector({
  sections: selectSections
})

export default connect(mapStateToProps)(Directory)

