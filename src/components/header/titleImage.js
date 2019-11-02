import React from "react"
// import DesktopTitle from './svgs/desktopTitle.inline.svg'
import { ReactComponent as MobileTitle } from './svgs/mobileTitle.inline.svg'
import initialRender from './initialRender.js'
import './titleImage.css'

class TitleImage extends React.Component {

  componentDidMount() {

    /* Render svg and animate its groups */
    const svgs = document.getElementsByTagName("svg")
    const groups = svgs[0].querySelectorAll("g")  // get gs from current
    initialRender(groups); //sets off initial title render on gs

  }

  render() {
    return (
      <div>
        <MobileTitle />
      </div>
    )
  }
        // <DesktopTitle ref={this.desktopTitle} />
}

export default TitleImage
