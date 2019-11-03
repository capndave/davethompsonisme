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

    const link =
      this.props.data.link ?
        <a href={this.props.data.link}>{this.props.data.link}</a>
        : null

    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection='horizontal'>
        <div className='project back' key='back' onClick={this.handleClick}>
          <h3>{this.props.data.name}</h3>
          <p>{this.props.data.description}</p>
          <p>Made with {this.props.data.builtWith}</p>
          <p>{link}</p>
        </div>
        <div className='project front' key='front' onClick={this.handleClick}>
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