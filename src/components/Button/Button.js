import React from 'react'
import './Button.css'

const Button = ({ name, onClick, text, type }) => (
	<button
		className='button'
		name={name}
		onClick={onClick}
		tabIndex="0"
		type={type}
	> {text}
	</button>
)

export default Button
