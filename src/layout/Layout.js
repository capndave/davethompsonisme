import React from 'react'
import Header from '../components/Header/Header'

export default function Layout ({ children }) {
  return (
		<div>
			<Header visible={true} fadeIn={false} />
			{children}
		</div>
  )
}
