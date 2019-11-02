import React from "react"
import './socialIcons.css'

class SocialIcons extends React.Component {
  render () {
    return (
      <section id='social-icons'
        className='display-flex justify-content-space-around width-100pct'>
          <a 
            alt="email"
            className="icon icon-mail"
            href="mailto:david.w.thompson@utexas.edu"
          />
          <a
            alt="github" 
            className="icon icon-github-circled-alt2"
            href="https://github.com/capndave"
          />
          <a
            alt="linkedin" 
            className="icon icon-linkedin"
            href="https://www.linkedin.com/in/davethompsonisme/"
          />
          <a
            alt="twitter" 
            className="icon icon-twitter"
            href="https://twitter.com/capndavet"
          />
      </section>
    )
  }
}

export default SocialIcons
