import React from "react"
import TitleImage from './titleImage/titleImage'
import SocialIcons from './socialIcons/socialIcons'
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