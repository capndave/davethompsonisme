import React from "react"
import { Header } from './Header'

export function Layout({ children }) {
  return (
    <div>
	  <Header visible={true} fadeIn={false}/>
      {children}
    </div>
  )
}