import React from "react"
import './myWork.css'
import Project from './myWork/project'
import bluebonnetRecords from '../../../assets/projects/bluebonnetrecords.png'
import taxpayerSignin from '../../../assets/projects/arbq_signin.png'
import taxpayerPanel from '../../../assets/projects/arbq_panel.png'
import lilNonnas from '../../../assets/projects/lilnonnas.png'
import mollywoodStudio from '../../../assets/projects/mollywoodstudio.png'
import rareDarey from '../../../assets/projects/raredarey.png'

class MyWork extends React.Component {
  render () {
      const data = [
        {
          name: 'TCAD Taxpayer Signin',
          builtWith: 'Vue and Vuex. Back end build with Node, Docker, SQL Server and Redis.',
          description: (
            <div>Allows taxpayers to sign in when they come to TCAD for an Appraisal Review hearing.</div>
          ),
          image: taxpayerSignin,
          link: null
        },
        {
          name: 'TCAD Taxpayer Panel Management',
          builtWith: 'Vue. Back end build with Node, Docker, SQL Server and Redis.',
          description: (
            <div>Allows TCAD staff to manage customer workflow.</div>
          ),
          image: taxpayerPanel,
          link: null
        },
        {
          name: 'Bluebonnet Records',
          builtWith: 'Webpack, HTML, CSS, and JavaScript.',
          description: (
            <div>Commercial website for Bluebonnet Records in Lockhart, TX></div>
          ),
          image: bluebonnetRecords,
          link: 'bluebonnet-records.com'
        },
        {
          name: 'Mollywood Studio',
          builtWith: 'HTML, CSS, and JavaScript.',
          description: (
            <div>Commercial website for Mollywood Studio photography in Los Angeles, CA></div>
          ),
          image: mollywoodStudio,
          link: 'mollywoodstudio.com'
        },
        {
          name: 'Lil Nonna\'s',
          builtWith: 'HTML, CSS, and JavaScript. Uses Google Sheets as a minimal CMS.',
          description: (
            <div>Commercial website for Lil Nonna's Pizza in Austin, TX></div>
          ),
          image: lilNonnas,
          link: 'lilnonnas.com'
        },
        {
          name: 'Rare Darey',
          builtWith: 'React. Site in progress!',
          description: (
            <div>Commercial website for Rare Darey, manufacturer of dairy-free cheese</div>
          ),
          image: rareDarey,
          link: 'raredarey.com'
        }
      ]
      const projects = data.map(d => {
        return (
            <Project data={d}  />
        )
      })

      return (
        <article id='my-work'>
          <div id='projects'>
            {projects}
          </div>
        </article>
    )
  }
}

export default MyWork