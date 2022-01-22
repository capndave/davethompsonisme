import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm'
import Icons from '../components/Icons/Icons'
import useWindowSize from '../hooks/useWindowSize'

export default function Contact () {
  const { windowSize } = useWindowSize()

  return (
		<article id='contact'>
			<Icons />
			<ContactForm />
		</article>
  )
}
