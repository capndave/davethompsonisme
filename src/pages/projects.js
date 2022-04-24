import React from 'react'
import './projects.css'
import Project from './Project/Project'

import bluebonnetRecords from '../assets/images/bluebonnetrecords.png'
import taxpayerSignin from '../assets/images/arbq_signin.png'
import promiseNeighborhoods from '../assets/images/promise_neighborhoods.png'
import redRiverHerbs from '../assets/images/redriverherbs.jpg'
import lilNonnas from '../assets/images/lilnonnas.png'
import mollywoodStudio from '../assets/images/mollywoodstudio.png'

function Projects () {
  /**
	 * Supercedes propagation of pbreakingarent events
	 * Used to ensure that onClick event of the element this is applied to
	 * supercedes onClick event of >parent elements
	 * @function
	 * @param {object} event
	 */
  function supercedeOtherOnclickHandlers (event) {
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
  function doubleEscapeURLString (url) {
    return url.includes('//') ? url : `//${url}`
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
			rel='noopener noreferrer'
			target='_blank'
			onClick={supercedeOtherOnclickHandlers}
		>{title}</a>
  }

  /**
	 * List of project data
	 * of apps and sites dave has made
	 * @object
	 */
  const data = [
    {
      name: titleAsLink('Red River Herbs', 'redriverherbs.com'),
      builtWith: 'Gatsby and Contentful (JAM Stack)',
      description: 'Commercial website for Red River Herbs',
      image: redRiverHerbs,
      technologies: ['Gatsby', 'React', 'Contentful']
    },
    {
      name: titleAsLink('Lil Nonna\'s', 'lilnonnas.com'),
      builtWith: 'HTML, CSS, and JavaScript. Uses Google Sheets as a minimal CMS.',
      description: 'Commercial website for Lil Nonna\'s Pizza in Austin, TX',
      image: lilNonnas,
      technologies: ['HTML5', 'CSS', 'JavaScript', 'Google Sheets']
    },
    {
      name: 'TCAD ARB Apps',
      builtWith: 'Vue, Vuex, Node, Docker, SQL Server and Redis.',
      description: 'Suite of applications facilitating customer sign in & management, like the queue at the DMV.',
      image: taxpayerSignin,
      technologies: ['Vue', 'Node', 'Docker', 'SQL Server', 'Redis']
    },
    {
      name: titleAsLink('Mollywood Studio', 'mollywoodstudio.com'),
      builtWith: 'HTML, CSS, and JavaScript.',
      description: 'Commercial website for Mollywood Studio photography in Los Angeles, CA',
      image: mollywoodStudio,
      technologies: ['HTML5', 'CSS', 'JavaScript']
    },
    {
      name: 'Bluebonnet Records',
      builtWith: 'Webpack, HTML, CSS, and JavaScript.',
      description: 'Deprecated website for Bluebonnet Records in Lockhart, TX',
      image: bluebonnetRecords,
      technologies: ['HTML5', 'CSS', 'JavaScript', 'WebPack']
    },
    {
      name: 'Promise Neighborhoods',
      builtWith: 'HTML, CSS, Javascript, Leaflet, Waypoints, and QGIS.',
      description: 'Former profile for the U.S. Department of Education\'s Promise Neighborhoods Initiative',
      image: promiseNeighborhoods,
      technologies: ['HTML5', 'CSS', 'JavaScript', 'Leaflet', 'GIS']
    }
  ]

  const projects = data.map((d, i) => {
    return (
			<Project data={d} key={i} />
    )
  })

  return (
		<article id='projects'>
			{projects}
		</article>
  )
}

export default Projects
