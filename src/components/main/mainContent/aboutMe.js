import React from "react"
import './aboutMe.css'

class AboutMe extends React.Component {

  render () {
      const employer = 'Travis Central Appraisal District'
      return (
          <article id='about-me'>
            I'm a Full Stack Web Developer, data geek, and former musician/social worker/social sciences researcher/data visualization engineer.
            That puts me equally at home with coding, graphic design, manageing survey research, doing regression analysis on huge data sets and managing databases.
            See some of the things I've built <span>here</span> 
          </article>
      )
  }
}

export default AboutMe