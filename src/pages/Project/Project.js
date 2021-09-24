import React from 'react'
import ReactCardFlip from 'react-card-flip'
import './Project.css'

export default class Project extends React.Component {
  constructor () {
    super()
    this.state = {
      isFlipped: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleHover = this.handleHover.bind(this)
  }

  handleHover (e) {
    e.preventDefault()
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
  }

  handleClick (e) {
    e.preventDefault()
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
  }

  render () {
    const link =
			this.props.data.link
			  ? <a href={this.props.data.link}>{this.props.data.link}</a>
			  : null

    return (
			<ReactCardFlip
				isFlipped={this.state.isFlipped}
				flipDirection='horizontal'
				cardZIndex='0'
			>
				<div
					className='project front'
					key='front'
					onClick={this.handleClick}
					onMouseEnter={this.handleHover}
				>
					<img
						alt='project'
						className='image'
						src={this.props.data.image}>
					</img>
				</div>
				<div
					className='project back'
					key='back'
					onClick={this.handleClick}
					onMouseLeave={this.handleHover}
				>
					<div className='text'>
						<h3>{this.props.data.name}</h3>
						<p>{this.props.data.description}</p>
						<p>Made with {this.props.data.builtWith}</p>
						<p>{link}</p>
					</div>
				</div>
			</ReactCardFlip>
    )
  }
}
