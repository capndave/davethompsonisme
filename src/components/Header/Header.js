import React, {
  forwardRef
} from 'react'
import { Navbar } from '../Navbar'
import DesktopTitle from '../../assets/titles/desktopTitle.svg'
import MobileTitle from '../../assets/titles/mobileTitle.svg'
import title from '../../mixins/animateTitle'
import './Header.css'
import './title.css'

const Header = forwardRef((props, ref) => {
  /* Get title based on width of viewport */
  const titleToUse = window.innerWidth > 750
    ? <DesktopTitle ref={ref} className={'titleImage visible'} />
    : <MobileTitle ref={ref} className={'titleImage visible'} />

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
})

export default Header
