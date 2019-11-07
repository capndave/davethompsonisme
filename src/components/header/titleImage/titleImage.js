import React from "react"
import { ReactComponent as DesktopTitle } from '../../../assets/titles/desktopTitle.svg'
import { ReactComponent as MobileTitle } from '../../../assets/titles/mobileTitle.svg'
import { animate, appear } from '../applyStyle'
import './titleImage.css'
import cookie from './cookie'

class TitleImage extends React.Component {

  componentDidMount() {
    
    /* Check for cookie (shows whether logged in in the past day) */
    if (!cookie.exists()) {
      animate() 
    } else {
      // appear() 
      animate() 
    }
      
    /* Set cookie */
    cookie.set()

  }

  render() {

    /* Get title based on width of viewport */
    const titleToUse = window.innerWidth > 750 ? <DesktopTitle /> : <MobileTitle />

    return (
      <div className="titleImage">
        { titleToUse }
      </div>
    )
  }
}

export default TitleImage
