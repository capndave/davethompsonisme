import React from "react"
import './main.css'
import Projects from './projects/projects'
import AboutMe from './aboutMe/aboutMe'
import '../../assets/icons/css/mfglabs.css'

const Main = function (props) {

  /**
   * const {boolean} screenIsLessThan500px
   */
  const screenIsLessThan500px = window.innerWidth < 500

  const carouselElements = [
    {
      title: 'About Me',
      content: <AboutMe />
    },
    {
      title: 'My Work',
      content: <Projects />,
      info: screenIsLessThan500px ? 'Click each box for details' : null
    }
  ]

  let activeElement = carouselElements[props.activeElementIndex]

  return (
    <section
      className={
        (props.visible ? '' : 'opacity-0 ') +
        (props.fadeIn ? 'fade-in' : '')
      }
      id='main'
    >
      <article id='main-content'>
        <div id="title-block">
          <h2 className='text-align-center width-100-percent'>
            {activeElement.title}
          </h2>
          {activeElement.info}
        </div>
        {activeElement.content}
      </article>
    </section>
  )
}

export default Main