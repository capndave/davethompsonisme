import React from 'react'
import './Label.css'

function Label ({ text, children }) {
  return (
		<label className='label'>
			<div className='label-text'>{text}</div>
			{children}
		</label>
  )
}

export default Label
