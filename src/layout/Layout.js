import React, { useState, createRef } from 'react'
import Header from '../components/Header/Header'
import title from '../mixins/animateTitle'
import cookie from '../mixins/cookie'
import './layout.css'

export default function Layout ({ children }) {
  const [fadeIn, setFadein] = useState(true)
  const [visible, setVisible] = useState(true)
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const svgRef = createRef()

  /**
	*  Check if cookie exists and update UI appropriately
	*  Cookie shows whether logged in in the past day
	*/
  function handleAppearance () {
    if (cookie.exists()) {
      console.log('cookie exists')
      // title.appear(svgRef)
      // makeContentVisible()
    } else {
      console.log('cookie does not exist')
      title.appear(svgRef)
      // title.animate(svgRef)
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

  // handleAppearance()

  return (
		<div id='app'>
			<Header ref={svgRef} shouldAnimate={shouldAnimate} />
			{children}
		</div>
  )
}
