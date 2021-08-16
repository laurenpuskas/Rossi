import React, { useState } from 'react'
import { bool, func } from 'prop-types'
import Headroom from 'react-headroom'

import Logo from '../Logo'
import Button from '../Button'
import Drawer from '../Drawer'
import * as styles from './style.module.scss'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Headroom className={`z-50 relative`}>
        <div
          className={`container flex flex-row items-center mx-auto px-4 md:px-14 py-3 md:py-8 w-full`}
        >
          <div
            className={`
              relative 
              w-5 
              h-5 
              mr-4 
              flex 
              flex-col 
              justify-center 
              ${styles.button}
            `}
            onClick={() => setOpen(!open)}
          >
            <span
              className={`absolute top-2 left-0 ${
                open ? 'transform rotate-45' : ''
              }`}
            ></span>
            <span
              className={`absolute left-0 ${
                open ? 'transform -rotate-45 top-2' : 'top-3'
              }`}
            ></span>
          </div>
          <Logo />
          <Button url="/get-started" transition="fade" classes="ml-auto">
            Get Started
          </Button>
        </div>
      </Headroom>

      <Drawer open={open} />
    </>
  )
}

Header.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Header
