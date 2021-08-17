import React, { useState } from 'react'
import { bool, func } from 'prop-types'
import Headroom from 'react-headroom'

import Wrapper from '../Wrapper'
import Logo from '../Logo'
import Button from '../UI/Button'
import Drawer from './Drawer'
import * as styles from './style.module.scss'

const Header = () => {
  const [open, setOpen] = useState(false)

  const openHandler = () => {
    setOpen(!open)
    document.body.classList.toggle('drawer-open')
  }
  
  return (
    <>
      <Headroom className={`z-50 relative`}>
        <Wrapper size="large" classes="py-3 md:py-8">
          <div
            className={`relative w-5 h-5 mr-4 flex flex-col justify-center ${styles.button}`}
            onClick={openHandler}
          >
            <span
              className={`absolute top-2 left-0 transition transform duration-100 ${
                open ? 'transform rotate-45' : ''
              }`}
            ></span>
            <span
              className={`absolute left-0 transition transform duration-100 ${
                open ? 'transform -rotate-45 top-2' : 'top-3'
              }`}
            ></span>
          </div>
          <Logo />
          <Button
            type="submit"
            href="/get-started"
            open={open}
            transition="fade"
            classes="ml-auto"
          >
            Get Started
          </Button>
        </Wrapper>
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
