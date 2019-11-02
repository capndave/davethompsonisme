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
          name: 'Taxpayer Signin',
          description: (
            <div>Allows signin</div>
          ),
          image: taxpayerSignin,
        },
        {
          name: 'Taxpayer Panels',
          description: (
            <div>Allows administration of workstations for appraisers to work with taxpayers</div>
          ),
          image: taxpayerPanel,
        },
        {
          name: 'Bluebonnet Records',
          description: (
            <div>Commercial website for Bluebonnet Records in Lockhart, TX></div>
          ),
          image: bluebonnetRecords,
        },
        {
          name: 'Mollywood Studio',
          description: (
            <div>Commercial website for Mollywood Studio photography in Los Angeles, CA></div>
          ),
          image: mollywoodStudio,
        },
        {
          name: 'Lil Nonna\'s',
          description: (
            <div>Commercial website for Lil Nonna's Pizza in Austin, TX></div>
          ),
          image: lilNonnas,
        },
        {
          name: 'Rare Darey',
          description: (
            <div>Commercial website for Rare Darey, manufacturer of dairy-free cheese</div>
          ),
          image: rareDarey,
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