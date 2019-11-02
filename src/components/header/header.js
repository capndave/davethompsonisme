import React from "react"
import TitleImage from './titleImage'
import SocialIcons from './socialIcons'
import './header.css'

class Header extends React.Component {
  render () {
      return (
        <header id='header'>
          <TitleImage />
          <SocialIcons />
        </header>
      )
  }
}

export default Header