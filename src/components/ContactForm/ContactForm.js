import React, { useState } from 'react'
import Label from '../Label/Label'

const ContactForm = () => {
  const [state, setState] = useState({})

  function handleSubmit () {
    console.log('submitting')
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
		</form>
  )
}

export default ContactForm
