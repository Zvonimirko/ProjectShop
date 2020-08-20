import React from 'react'

import './formInput.styles.scss'

function FormInput({handleChange, ...otherProps}) {
  console.log(otherProps)
  return (
    <div>
      <input className='form-input' onChange={handleChange} {...otherProps} />
    </div>
  )
}

export default FormInput