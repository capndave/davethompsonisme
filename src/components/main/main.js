import React from "react"
import './main.css'
import Projects from './projects/projects'
import AboutMe from './aboutMe/aboutMe'
import '../../assets/icons/css/mfglabs.css'

const Main = function (props) {

  const carouselElements = [
    {
      name: 'About Me',
      content: <AboutMe />
    },
    {
      name: 'My Work',
      content: <Projects />
    }
  ]

  let activeElement = carouselElements[props.activeElementIndex]

  return (
    <section id='main'>
      <article id='main-content'>
        <h2 className='text-align-center width-100-percent'>
          {activeElement.name}
        </h2>
        {activeElement.content}
      </article>
    </section>
  )
}

export default Main