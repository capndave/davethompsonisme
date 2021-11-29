import React, { useState } from 'react'
import './Project.css'

function Project(props) {
	const [isHovered, setIsHovered] = useState(false)
	const [isClicked, setIsClicked] = useState(false)

	const detail = <div className='detail'>
		<div className='inner'>
			<h3>{props.data.name}</h3>
			<p>{props.data.description}</p>
			<p>Built with {props.data.builtWith}</p>
		</div>
	</div>

	const image = <img
		alt='project image'
		className='image'
		src={props.data.image}
		onClick={() => setIsClicked(!isClicked)}
	/>

	const shownContent = isHovered ? detail : image

	return (
		<section
			// className={`project ${isHovered ? 'hovered' : null}`} // id conditional on hover
			className='project'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{shownContent}
		</section >
	)
}

export default Project
