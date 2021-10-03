import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'
import {
  faGithub,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

export function Navbar (props) {
  return (
		<nav
			className={`display-flex justify-content-space-around width-100pct 
        ${props.visible ? 'visible' : 'opacity-0 '}
        ${props.fadeIn ? 'fade-in' : ''}
      `}>
			<a href="#about" >about</a>
			<a href="#blog" >blog</a>
			<a href="#contact" >contact</a>
			<a href="#projects" >projects</a>
		</nav>
  )
}
