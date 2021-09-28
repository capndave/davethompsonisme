import React, { useEffect, useState } from 'react'
import TitleImage from './titleImage/titleImage'
import { Navbar } from '../Navbar'
import DesktopTitle from '../../assets/titles/desktopTitle.svg'
import MobileTitle from '../../assets/titles/mobileTitle.svg'
import cookie from '../../mixins/cookie'
import title from '../../mixins/applyStyle'
import './Header.css'

export default function Header (props) {
  const [fadeIn, setFadein] = useState(true)
  const [visible, setVisible] = useState(true)
  const [shouldAnimate, setShouldAnimate] = useState(false)

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

  handleAppearance()

  return (
		<header id='header'>
			{/* <TitleImage className={userIsNewToPage ? 'animate' : 'visible'} /> */}
			{titleToUse}
			<Navbar
				visible={props.visible}
				fadeIn={props.fadeIn}
			/>
		</header>
  )
}
