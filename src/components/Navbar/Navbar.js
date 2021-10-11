import React from 'react'
import './Navbar.css'

export function Navbar (props) {
  return (
		<nav
			className={`display-flex justify-content-space-around width-100pct 
        ${props.visible ? 'visible' : 'opacity-0 '}
        ${props.fadeIn ? 'fade-in' : ''}
      `}>
			<a href="about" >about</a>
			<a href="blog" >blog</a>
			<a href="contact" >contact</a>
			<a href="projects" >projects</a>
		</nav>
  )
}
