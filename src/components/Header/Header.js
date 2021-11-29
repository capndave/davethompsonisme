import React from 'react'
import { Navbar } from '../Navbar'
import DesktopTitle from '../../assets/titles/desktopTitle.svg'
import MobileTitle from '../../assets/titles/mobileTitle.svg'
import useWindowSize from '../../hooks/useWindowSize'
import title from '../../mixins/animateTitle'
import './Header.css'
import './title.css'

const Header = (props) => {
  const { windowSize } = useWindowSize()

  /* Get title based on width of viewport */
  const titleToUse = windowSize.innerWidth > 550
    ? <DesktopTitle className={'titleImage visible'} />
    : <MobileTitle className={'titleImage visible'} />

  return (
		<header id='header'>
			{titleToUse}
			<Navbar
				// visible={props.visible}
				visible={true}
				fadeIn={props.fadeIn}
			/>
		</header>
  )
}

export default Header
