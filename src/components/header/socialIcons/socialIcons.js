import React from "react"
import './socialIcons.css'

function SocialIcons(props) {
  return (
    <section id='socialIcons'
      className={`display-flex justify-content-space-around width-100pct 
        ${props.visible ? '' : 'opacity-0 '}
        ${props.fadeIn ? 'fade-in' : ''}
      `}>
      <a
        aria-label="icon-email"
        alt="email"
        className="icon icon-mail"
        href="mailto:david.w.thompson@utexas.edu"
      >&nbsp;</a>
      <a
        aria-label="icon-github"
        alt="github"
        className="icon icon-github-circled-alt2"
        href="https://github.com/capndave"
      >&nbsp;</a>
      <a
        aria-label="icon-linkedin"
        alt="linkedin"
        className="icon icon-linkedin"
        href="https://www.linkedin.com/in/davethompsonisme/"
      >&nbsp;</a>
      <a
        aria-label="icon-twitter"
        alt="twitter"
        className="icon icon-twitter"
        href="https://twitter.com/capndavet"
      >&nbsp;</a>
    </section>
  )
}

export default SocialIcons
