import React from "react"
import './aboutMe.css'

function AboutMe() {

  const employer = 'Travis Central Appraisal District'

  return (
    <article id='about-me'>
      <p>I build websites and apps for small businesses, and a Lead Software Engineer at <a href="https://www.traviscad.org/">Travis Central Appraisal District</a>.</p>
      <p>Before becoming a developer I played in punk bands, did social work, statistical computing, and made pretty graphs as a data visualization specialist.</p>
      <p>I'm good at Node.js, UI and graphic design, and assorted program-y things.</p>
      <p>Click right to see my work.</p>
    </article>
  )
}

export default AboutMe