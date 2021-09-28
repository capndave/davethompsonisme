import React, { useState } from 'react'
import Header from '../components/Header/Header'
import cookie from '../mixins/cookie'
import './layout.css'

export default function Layout ({ children }) {
  const [fadeIn, setFadein] = useState(true)
  const [visible, setVisible] = useState(true)
  const [shouldAnimate, setShouldAnimate] = useState(false)
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

  return (
		<div id='app'>
			<Header />
			{children}
		</div>
  )
}
