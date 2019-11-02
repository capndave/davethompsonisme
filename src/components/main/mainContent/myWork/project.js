import React from 'react'
import ReactCardFlip from 'react-card-flip'
import './project.css'

class Project extends React.Component {
  constructor() {
    super()
    this.state = {
      isFlipped: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    console.log('clicked')
    console.log(this.props)
    e.preventDefault()
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
  }
  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection='horizontal'>
        <div className='project' key='back' onClick={this.handleClick}>
          <h3>{this.props.data.name}</h3>
          <h5>{this.props.data.description}</h5>
        </div>
        <div className='project' key='front' onClick={this.handleClick}>
        <img
          class='project-image'
          src={this.props.data.image}>
        </img>
        </div>
      </ReactCardFlip>
    )
  }
}

export default Project