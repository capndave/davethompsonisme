import React, { useEffect, useState } from 'react'
import Label from '../Label/Label'
import Button from '../Button/Button'
import ValidationMessage from '../ValidationMessage/ValidationMessage'
import './ContactForm.css'

const ContactForm = () => {
  const [messageInfo, setMessageInfo] = useState({
    email: '',
    subject: '',
    message: ''
  })

  const [fieldError, setFieldError] = useState({
    email: false,
    subject: false,
    message: false
  })

  useEffect(() => {
    console.log({ fieldError })
  }, [fieldError])

  function handleSubmit (event) {
    event.preventDefault()
    const isValid = validate()
    console.log(isValid)
    if (isValid) console.log('submitting', messageInfo)
  }

  function handleChange (event) {
    setMessageInfo({ ...messageInfo, [event.target.name]: event.target.value })
  }

  function validate () {
    let isValid = true
    const newFieldError = {}
    for (const [key, value] of Object.entries(messageInfo)) {
      if (value.length === 0) {
        newFieldError[key] = true
        isValid = false
      } else {
        newFieldError[key] = false
      }
    }
    setFieldError(newFieldError)
    return isValid
  }

  return (
		<form
			id='contact-form'
			onSubmit={handleSubmit}
		>
			<Label>
				<span className='font-size-point-75-rem'>Email address</span>
				{fieldError.email && <ValidationMessage />}
				<input
					name='email'
					onChange={handleChange}
					value={messageInfo.email}
				/>
			</Label>
			<Label>
				<span className='font-size-point-75-rem'>Subject</span>
				{fieldError.subject && <ValidationMessage />}
				<input
					name='subject'
					onChange={handleChange}
					value={messageInfo.subject}
				/>
			</Label>
			<Label>
				<span className='font-size-point-75-rem'>Message</span>
				{fieldError.message && <ValidationMessage />}
				<textarea
					name='message'
					onChange={handleChange}
					value={messageInfo.message}
				/>
			</Label>
			<Button
				name='submit' text='Submit' />
		</form>
  )
}

export default ContactForm
