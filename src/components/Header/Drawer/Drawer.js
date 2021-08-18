import React from 'react'
import { bool } from 'prop-types'

import Wrapper from '../../Wrapper'
import Menu from '../Menu'
import Contact from '../../Contact'
import * as styles from './style.module.scss'

const Drawer = (props) => {
  return (
    <div
      className={`
        ${styles.drawer}
        ${props.open ? styles.open : null}
        absolute
        md:fixed 
        inset-x-0 
        w-screen 
        md:h-full 
        z-40 
        transition-top 
        ease-in-out  
        duration-1000
      `}
    >
      <div
        className={`
        ${styles.inner} 
        bg-white
        w-full 
        md:h-5/6
        z-40 
      `}
      >
        <Wrapper
          size="large"
          classes="grid grid-cols-1 md:grid-cols-3 text-center md:text-left md:gap-8 pt-20 pb-2 h-full"
        >
          <Menu classes="grid" open={props.open} />
          <Contact classes="col-span-2 pt-16 md:pt-0" open={props.open} />
        </Wrapper>
      </div>
    </div>
  )
}

Drawer.propTypes = {
  open: bool.isRequired,
}

export default Drawer
