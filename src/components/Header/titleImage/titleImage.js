import React from 'react'
import DesktopTitle from '../../../assets/titles/desktopTitle.svg'
import MobileTitle from '../../../assets/titles/mobileTitle.svg'
import './titleImage.css'

function TitleImage () {
  /* Get title based on width of viewport */
  const titleToUse = window.innerWidth > 750 ? <DesktopTitle /> : <MobileTitle />

  return (
		<div className="titleImage">
			{titleToUse}
		</div>
  )
}

export default TitleImage
