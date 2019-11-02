import React from 'react'
import './mainContent.css'
import MyWork from './mainContent/myWork'
import AboutMe from './mainContent/aboutMe'
import '../../assets/icons/css/mfglabs.css'

class MainContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeElementIndex: 0
    }
    this.toggleActiveElementIndex = this.toggleActiveElementIndex.bind(this)
  }

  toggleActiveElementIndex() {
    this.setState({
      activeElementIndex: +!this.state.activeElementIndex
    })
  }

  render() {
    const carouselElements = [
      {
        name: 'About Me',
        content: <AboutMe />
      },
      {
        name: 'My Work',
        content: <MyWork />
      }
    ]

    let activeElement = carouselElements[this.state.activeElementIndex]

    return (
      <section id='scroll-container'>
        <div 
          className="icon-left-open"
          onClick={this.toggleActiveElementIndex}
        ></div>
        <article id='scroll-content'>
          <h2 className='text-align-center width-100-percent'>
            {activeElement.name}
          </h2>
          {activeElement.content}
        </article>
        <div
          className="icon-right-open"
          onClick={this.toggleActiveElementIndex}
        ></div>
      </section>
    )
  }
}

export default MainContent