import React from "react"
import DaveImage from './daveImage'
import MainContent from './mainContent'
import './main.css'

class Main extends React.Component {
  render () {
      return (
        <main id='main'>
          {/*<DaveImage /> */}
          <MainContent />
        </main>
      )
  }
}

export default Main