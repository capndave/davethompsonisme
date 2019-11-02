import React from "react"
import './socialIcons.css'

class SocialIcons extends React.Component {
  render () {
    return (
      <section id='social-icons'
        className='display-flex justify-content-space-around width-100pct'>
          <div>mail</div>
          <div>github</div>
          <div>linkedin</div>
          <div>instagram</div>
      </section>
    )
  }
}

export default SocialIcons
