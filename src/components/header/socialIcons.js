import React from "react"
import './socialIcons.css'

class SocialIcons extends React.Component {
  render () {
    return (
      <section id='social-icons'
        className='display-flex justify-content-space-around width-100pct'>
          <div 
            alt="email"
            className="icon icon-mail"
          />
          <div
            alt="github" 
            className="icon icon-github-circled-alt2"
          />
          <div
            alt="linkedin" 
            className="icon icon-linkedin"
          />
          <div
            alt="twitter" 
            className="icon icon-twitter"
          />
      </section>
    )
  }
}

export default SocialIcons
