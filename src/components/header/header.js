import React from "react"
import TitleImage from './titleImage/titleImage'
import SocialIcons from './socialIcons/socialIcons'
import './header.css'

function Header(props) {
  return (
    <header id='header'>
      <TitleImage />
      <SocialIcons visible={props.visible} />
    </header>
  )
}

export default Header