import React, { useState } from 'react'

const ContactForm = () => {
  const [state, setState] = useState({})

  function handleSubmit () {
    console.log('submitting')
  }

  function handleChange (event) {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  return (
		<form onSubmit={handleSubmit}>
			<label>
				Email
				<input
					name='Email'
					onChange={handleChange}
					value={state.Email}
				/>
			</label>
			<label>
				Subject
				<input
					name='Subject'
					onChange={handleChange}
					value={state.Subject}
				/>
			</label>
			<label>
				Message
				<textarea
					name='Message'
					onChange={handleChange}
					value={state.Message}
				/>
			</label>
		</form>
  )
}

export default ContactForm
