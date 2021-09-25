import React from 'react'
import Header from '../components/Header/Header'
import './layout.css'

export default function Layout ({ children }) {
  return (
		<div id='app'>
			<Header visible={true} fadeIn={false} />
			{children}
		</div>
  )
}
