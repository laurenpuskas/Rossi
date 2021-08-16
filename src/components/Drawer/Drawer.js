import React from 'react'
import { bool } from 'prop-types'

import Menu from '../Menu'
import * as styles from './style.module.scss'

const Drawer = (props) => {
  return (
    <div
      className={`
        ${styles.drawer}
        ${props.open ? styles.open : ''}
        fixed 
        opacity-0 
        inset-x-0 
        w-screen 
        z-40 
        bg-dark
        bg-opacity-75
      `}
    >
      <div
        className={`
        ${styles.inner} 
        bg-white
        w-full
      `}
      >
        <Menu />
      </div>
    </div>
  )
}

Drawer.propTypes = {
  open: bool.isRequired,
}

export default Drawer
