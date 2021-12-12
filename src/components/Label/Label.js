import React from 'react'
import './Label.css'

function Label ({ text, children }) {
  return (
		<label className='label'>
			{text}
			{children}
		</label>
  )
}

export default Label
