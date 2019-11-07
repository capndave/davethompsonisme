import React from "react"
import './projects.css'
import Project from './project/project'
import bluebonnetRecords from '../../../assets/projects/bluebonnetrecords.png'
import taxpayerSignin from '../../../assets/projects/arbq_signin.png'
import taxpayerPanel from '../../../assets/projects/arbq_panel.png'
import lilNonnas from '../../../assets/projects/lilnonnas.png'
import mollywoodStudio from '../../../assets/projects/mollywoodstudio.png'
import rareDarey from '../../../assets/projects/raredarey.png'

function Projects() {
  const data = [
    {
      name: 'TCAD ARB Apps',
      builtWith: 'Vue and Vuex. Back end built with Node, Docker, SQL Server and Redis.',
      description: 'Suite of applications facilitating customer sign in and management, similar to what they use at the DMV.',
      image: taxpayerSignin,
      link: null
    },
    {
      name: 'Bluebonnet Records',
      builtWith: 'Webpack, HTML, CSS, and JavaScript.',
      description: 'Commercial website for Bluebonnet Records in Lockhart, TX',
      image: bluebonnetRecords,
      link: 'bluebonnet-records.com'
    },
    {
      name: 'Mollywood Studio',
      builtWith: 'HTML, CSS, and JavaScript.',
      description: 'Commercial website for Mollywood Studio photography in Los Angeles, CA',
      image: mollywoodStudio,
      link: 'mollywoodstudio.com'
    },
    {
      name: 'Lil Nonna\'s',
      builtWith: 'HTML, CSS, and JavaScript. Uses Google Sheets as a minimal CMS.',
      description: 'Commercial website for Lil Nonna\'s Pizza in Austin, TX',
      image: lilNonnas,
      link: 'lilnonnas.com'
    },
    {
      name: 'Rare Darey',
      builtWith: 'React. Site in progress!',
      description: 'Commercial website for Rare Darey, dairy-free cheese maker',
      image: rareDarey,
      link: 'raredarey.com'
    }
  ]
  const projects = data.map(d => {
    return (
      <Project data={d} />
    )
  })

  return (
    <article id='projects'>
      {projects}
    </article>
  )
}

export default Projects