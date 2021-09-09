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
    <Headroom>
      <Wrapper className={`${style.header} header-wrap`}>
        <Logo orange>Rossi.</Logo>
        <Menu open={open} setOpen={setOpen} white />
        <div className={style.button}>
          <Button href={`/get-started`} white line>
            Get Started
          </Button>
        </div>
      </Wrapper>

      <Drawer open={open} setOpen={setOpen} />
    </Headroom>
  )
}

export default Header
