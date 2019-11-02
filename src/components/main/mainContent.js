import React from 'react'
import './mainContent.css'
import MyWork from './mainContent/myWork'
import AboutMe from './mainContent/aboutMe'
import chevronLeftURL, {ReactComponent as ChevronLeft} from '../../assets/chevron-left.svg'
import chevronRightURL, {ReactComponent as ChevronRight} from '../../assets/chevron-right.svg'

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
        <img
          alt='chevron-left'
          className='chevron'
          onClick={this.toggleActiveElementIndex}
          src={chevronLeftURL}
        />
        <article id='scroll-content'>
          <h2 className='text-align-center width-100-percent'>
            {activeElement.name}
          </h2>
          {activeElement.content}
        </article>
        <img
          alt="chevron-right"
          className='chevron'
          onClick={this.toggleActiveElementIndex}
          src={chevronRightURL}
        />
      </section>
    )
  }
}

export default MainContent