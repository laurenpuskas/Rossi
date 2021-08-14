import React from 'react'

import Header from '../Header'
import './style.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
