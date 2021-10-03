import React from 'react'

export default function Contact () {
  return (
		<article id='contact'>
			<p>Contact form</p>
			<p>Socials
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
