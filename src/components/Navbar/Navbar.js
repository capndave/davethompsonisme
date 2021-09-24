import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'
import {
  faGithub,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

export function Navbar(props) {
  return (
    <nav
      className={`display-flex justify-content-space-around width-100pct 
        ${props.visible ? '' : 'opacity-0 '}
        ${props.fadeIn ? 'fade-in' : ''}
      `}>
      {/* <a
        aria-label="icon-email"
        alt="email"
        className="icon icon-mail"
        href="mailto:david.w.thompson@utexas.edu"
      >&nbsp;</a> */}
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
    </nav>
  )
}

