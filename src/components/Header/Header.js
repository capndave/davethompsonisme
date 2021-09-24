import React from 'react'
// import TitleImage from './titleImage/titleImage'
import { Navbar } from '../Navbar'
import './Header.css'

export default function Header (props) {
  return (
		<header id='header'>
			{/* <TitleImage /> */}
			<Navbar
				visible={props.visible}
				fadeIn={props.fadeIn}
			/>
		</header>
  )
}
