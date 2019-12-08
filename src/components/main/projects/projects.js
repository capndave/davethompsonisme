import React from "react"
import './projects.css'
import Project from './project/project'
import bluebonnetRecords from '../../../assets/projects/bluebonnetrecords.png'
import taxpayerSignin from '../../../assets/projects/arbq_signin.png'
import promiseNeighborhoods from '../../../assets/projects/promise_neighborhoods.png'
import dataFiniti from '../../../assets/projects/datafiniti.png'
import lilNonnas from '../../../assets/projects/lilnonnas.png'
import mollywoodStudio from '../../../assets/projects/mollywoodstudio.png'
import rareDarey from '../../../assets/projects/raredarey.png'
import { stringLiteral } from "@babel/types"

function Projects() {
  /**
   * Supercedes propagation of parent events
   * Used to ensure that onClick event of the element this is applied to
   * supercedes onClick event of >parent elements 
   * @function
   * @param {object} event 
   */
  function supercedeOtherOnclickHandlers(event) {
    event.stopPropagation()
  }

  /**
   * Adds double-forward slashes to url
   * to ensure that url is treated as such rather than
   * as a child to parent context url
   * @function
   * @param {string} url 
   * @returns {string} url
   */
  function doubleEscapeURLString(url) {
    const returnUrl = url.includes('//') ? url : `//${url}`
    console.log(returnUrl)
    return returnUrl
  }

  /**
   * Returns an a element from a title string and url 
   * @param {string} title 
   * @param {string} url 
   * @returns {jsx} a element
   */
  const titleAsLink = function (title, url) {
    return <a
      href={doubleEscapeURLString(url)}
      target='_blank'
      onClick={supercedeOtherOnclickHandlers}
    >{title}</a>
  }

  const data = [
    {
      name: 'TCAD ARB Apps',
      builtWith: 'Vue, Vuex, Node, Docker, SQL Server and Redis.',
      description: 'Suite of applications facilitating customer sign in and management, similar to what they use at the DMV.',
      image: taxpayerSignin,
      link: null
    },
    {
      name: titleAsLink('Bluebonnet Records', 'bluebonnet-records.com'),
      builtWith: 'Webpack, HTML, CSS, and JavaScript.',
      description: 'Commercial website for Bluebonnet Records in Lockhart, TX',
      image: bluebonnetRecords,
      link: 'bluebonnet-records.com'
    },
    {
      name: 'Lil Nonna\'s',
      builtWith: 'HTML, CSS, and JavaScript. Uses Google Sheets as a minimal CMS.',
      description: 'Commercial website for Lil Nonna\'s Pizza in Austin, TX',
      image: lilNonnas,
      link: 'lilnonnas.com'
    },
    {
      name: 'Mollywood Studio',
      builtWith: 'HTML, CSS, and JavaScript.',
      description: 'Commercial website for Mollywood Studio photography in Los Angeles, CA',
      image: mollywoodStudio,
      link: 'mollywoodstudio.com'
    },
    {
      name: 'Rare Darey',
      builtWith: 'React. Site in progress!',
      description: 'Commercial website for Rare Darey, dairy-free cheese maker',
      image: rareDarey,
      link: 'raredarey.com'
    },
    {
      name: 'Promise Neighborhoods',
      builtWith: 'HTML, CSS, Javascript, Leaflet, Waypoints, and QGIS.',
      description: 'Former profile for the U.S. Department of Education\'s Promise Neighborhoods Initiative',
      image: promiseNeighborhoods,
      link: <a href='davethompsonisme.com/promiseneighborhoods'>link</a>
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