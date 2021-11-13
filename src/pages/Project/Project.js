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
			className='project'// id conditional on hover
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{shownContent}
		</section >
	)
}

export default Project

// export default class Project extends React.Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			isFlipped: false
// 		}
// 		this.handleClick = this.handleClick.bind(this)
// 		this.handleHover = this.handleHover.bind(this)
// 	}

// 	handleHover(e) {
// 		e.preventDefault()
// 		this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
// 	}

// 	handleClick(e) {
// 		e.preventDefault()
// 		this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
// 	}

// 	render() {
// 		const link =
// 			this.props.data.link ? <a href={this.props.data.link}>{this.props.data.link}</a> : null

// 		return (
// 			<div
// 				isFlipped={this.state.isFlipped}
// 				flipDirection='horizontal'
// 				cardZIndex='0'
// 			>
// 				<div
// 					className='project front'
// 					key='front'
// 					onClick={this.handleClick}
// 					onMouseEnter={this.handleHover}
// 				>
// 					<img
// 						alt='project'
// 						className='image'
// 						src={this.props.data.image}>
// 					</img>
// 				</div>
// 				<div
// 					className='project back'
// 					key='back'
// 					onClick={this.handleClick}
// 					onMouseLeave={this.handleHover}
// 				>
// 					<div className='text'>
// 						<h3>{this.props.data.name}</h3>
// 						<p>{this.props.data.description}</p>
// 						<p>Made with {this.props.data.builtWith}</p>
// 						<p>{link}</p>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }
