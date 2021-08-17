import React from 'react'
import { bool } from 'prop-types'

import Wrapper from '../../Wrapper'
import Menu from '../Menu'
import Form from '../../UI/Form'
import * as styles from './style.module.scss'

const Drawer = (props) => {
  return (
    <div
      className={`
        ${styles.drawer}
        ${props.open ? styles.open : ''}
        fixed 
        inset-x-0 
        w-screen 
        h-full 
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
        h-full
        md:h-5/6
        z-40 
      `}
      >
        <Wrapper size="large" classes="grid grid-cols-2 gap-4 py-10 h-full">
          <Menu
            classes="grid"
            liClasses="py-2"
            linkClasses="text-4xl font-thin"
            open={props.open}
          />
          <Form classes="hidden md:flex flex-col flex-wrap justify-center" />
        </Wrapper>
      </div>
    </div>
  )
}

Drawer.propTypes = {
  open: bool.isRequired,
}

export default Drawer
