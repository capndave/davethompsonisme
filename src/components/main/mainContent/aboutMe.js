import React from "react"
import './aboutMe.css'

class AboutMe extends React.Component {

  render () {
      const employer = 'Travis Central Appraisal District'
      return (
          <article id='about-me'>
            <p>I build websites and apps for small businesses, and am Lead Software Engineer at <a href="https://www.traviscad.org/">Travis Central Appraisal District</a>.</p>            
            <p>Before becoming a developer I played rock 'n roll, did social work, worked as a data and policy consultant, and made pretty graphs as a data visualization specialist.</p>
            <p>I'm good at UI and graphic design, problem-solving, and making all the pieces fit together.</p>
            <p>Click right to see some things I've built.</p>
          </article>
      )
  }
}

export default AboutMe