import React from 'react'

import Header from './Header'
import * as style from './style.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <div className={style.content}>
        <Header />
        <div className={style.children}>{children}</div>
      </div>
    </>
  )
}

export default Layout
