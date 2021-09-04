import React, { useState } from 'react'
import Headroom from 'react-headroom'

import Wrapper from '../Wrapper'
import Logo from '../../Logo'
import Menu from '../../Menu'
import Button from '../../UI/Button'
import Drawer from '../Drawer'
import * as style from './style.module.scss'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Headroom>
        <Wrapper className={style.header}>
          <Logo orange>Rossi.</Logo>
          <Menu open={open} setOpen={setOpen} white />
          <div className={style.button}>
            <Button to={`/get-started`} white line>
              Get Started
            </Button>
          </div>
        </Wrapper>
      </Headroom>

      <Drawer open={open} setOpen={setOpen} />
    </>
  )
}

export default Header
