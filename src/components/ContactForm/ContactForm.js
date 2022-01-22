import React, { useState } from 'react'
import Label from '../Label/Label'
import Button from '../Button/Button'
import './ContactForm.css'

const ContactForm = () => {
  const [state, setState] = useState({
    Email: '',
    Subject: '',
    Message: ''
  })

  function handleSubmit (event) {
    event.preventDefault()
    console.log('submitting', state)
  }

  function handleChange (event) {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  return (
		<form
			id='contact-form'
			onSubmit={handleSubmit}
		>
			<Label text='Email address'>
				<input
					name='Email'
					onChange={handleChange}
					value={state.Email}
				/>
			</Label>
			<Label text='Subject'>
				<input
					name='Subject'
					onChange={handleChange}
					value={state.Subject}
				/>
			</Label>
			<Label text='Message'>
				<textarea
					name='Message'
					onChange={handleChange}
					value={state.Message}
				/>
			</Label>
			<Button
				name='submit' text='Submit' />
		</form>
  )
}

export default ContactForm
