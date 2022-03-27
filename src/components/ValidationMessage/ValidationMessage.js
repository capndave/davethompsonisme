import React from 'react'
import './ValidationMessage.css'

const ValidationMessage = ({ message }) => {
  return (
		<span id='validation-message'>{message ?? 'missing'}</span>
  )
}

export default ValidationMessage
