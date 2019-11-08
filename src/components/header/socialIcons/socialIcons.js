import React from "react"
import './socialIcons.css'

function SocialIcons(props) {
  return (
    <section id='socialIcons'
      className={`display-flex justify-content-space-around width-100pct 
        ${props.visible ? '' : 'opacity-0'}`}>
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

export default SocialIcons
