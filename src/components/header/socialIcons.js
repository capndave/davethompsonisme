import React from "react"

class SocialIcons extends React.Component {
  render () {
    return (
      <section id='social-icons'
        className='display-flex justify-content-space-around width-100pct'>
          <div 
            alt="email"
            className="icon-mail"
          />
          <div
            alt="github" 
            className="icon-github-circled-alt2"
          />
          <div
            alt="linkedin" 
            className="icon-linkedin"
          />
          <div
            alt="twitter" 
            className="icon-twitter"
          />
      </section>
    )
  }
}

export default SocialIcons
