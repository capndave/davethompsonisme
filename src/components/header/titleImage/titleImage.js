import React from "react"
import { ReactComponent as DesktopTitle } from '../svgs/desktopTitle.svg'
import { ReactComponent as MobileTitle } from '../svgs/mobileTitle.svg'
import initialRender from '../initialRender'
import './titleImage.css'

class TitleImage extends React.Component {

  componentDidMount() {
    /* Render svg and animate its groups */
    const svgs = document.getElementsByTagName("svg")
    const groups = svgs[0].querySelectorAll("g")  // get gs from current
    initialRender(groups); //sets off initial title render on gs
  }

  

  render() {
    console.log(window.innerWidth)
    const titleToUse = window.innerWidth > 750 ? <DesktopTitle /> : <MobileTitle />
    return (
      <div className="titleImage">
        { titleToUse }
      </div>
    )
  }
}

export default TitleImage
