import React from 'react'
import { Link } from 'gatsby'
import './about.css'

export default function About () {
  return (
		<article id='about'>
			<p>I build websites and apps for small businesses, and am a Software Engineer at <a href="https://www.travelers.com/">Travelers Insurance</a>.</p>
			<p>Before becoming a developer I played music, did social work, statistical computing, and made pretty graphs as a data visualization specialist.</p>
			<p>I'm good at Node.js, UI and graphic design, and assorted program-y things.</p>
			<p>Click <Link to='/projects/'>here</Link> to see my work.</p>
		</article>
  )
}
