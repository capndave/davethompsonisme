import React, { useState } from 'react'
import DesktopTitle from '../../../assets/titles/desktopTitle.svg'
import MobileTitle from '../../../assets/titles/mobileTitle.svg'
import cookie from '../../../mixins/cookie'
import title from '../../../mixins/applyStyle'
import './titleImage.css'

function TitleImage ({ className }) {
  // const [userIsNewToPage, setUserIsNewToPage] = useState(!cookie.exists())
  const [fadeIn, setFadein] = useState(true)
  const [visible, setVisible] = useState(true)

  /* Get title based on width of viewport */
  const titleToUse = window.innerWidth > 750 ? <DesktopTitle /> : <MobileTitle />

  /**
	*  Check if cookie exists and update UI appropriately
	*  Cookie shows whether logged in in the past day
	*/
  function handleAppearance () {
    if (cookie.exists()) {
      console.log('cookie exists')
      // makeContentVisible()
    } else {
      console.log('cookie does not exist')
      // title.animate()
      // .then(this.revealContent.bind(this))
    }
    // cookie.set() // Update cookie to show site was visited
  }

  /**
 * Make the title and content appear
 */
  function makeContentVisible () {
    title.appear()
    setVisible(true)
  }

  handleAppearance()

  return (
		// <div className={`titleImage ${className}`}>
		<div className={className}>
			{titleToUse}
		</div>
  )
}

export default TitleImage
