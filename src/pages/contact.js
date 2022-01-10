import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm'
import Icons from './Icons/Icons'
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
