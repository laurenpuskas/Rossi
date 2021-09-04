import React from 'react'

import Header from './Header'
import * as style from './style.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <div className={style.content}>
        <Header />
        {children}
      </div>
    </>
  )
}

export default Layout
