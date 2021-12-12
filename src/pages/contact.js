import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ContactForm from '../components/ContactForm/ContactForm'

export default function Contact () {
  return (
		<article id='contact'>
			<ContactForm />
			<p>Socials
				<a
					aria-label="icon-email"
					alt="email"
					className="icon icon-email"
					href="mailto: dave@davethompsonisme.com"
				>
					<FontAwesomeIcon icon={faEnvelope} size="1x" />
				</a>
				<a
					aria-label="icon-github"
					alt="github"
					className="icon"
					href="https://github.com/capndave"
				>
					<FontAwesomeIcon
						icon={faGithub}
						size="1x"
					/>
				</a>
				<a
					aria-label="icon-linkedin"
					alt="linkedin"
					className="icon icon-linkedin"
					href="https://www.linkedin.com/in/davethompsonisme/"
				>
					<FontAwesomeIcon icon={faLinkedin} size="1x" />
				</a>
				<a
					aria-label="icon-twitter"
					alt="twitter"
					className="icon icon-twitter"
					href="https://twitter.com/capndavet"
				>
					<FontAwesomeIcon icon={faTwitter} size="1x" />
				</a>

			</p>
		</article>
  )
}
