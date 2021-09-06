import React, { useState } from 'react'

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
      <Wrapper className={style.header}>
        <Logo orange>Rossi.</Logo>
        <Menu open={open} setOpen={setOpen} white />
        <div className={style.button}>
          <Button href={`/get-started`} white line>
            Get Started
          </Button>
        </div>
      </Wrapper>

      <Drawer open={open} setOpen={setOpen} />
    </>
  )
}

export default Header
