import React from 'react'
import Headroom from 'react-headroom'

import Wrapper from '../Wrapper'
import Logo from '../../Logo'
import Menu from '../../Menu'
import Button from '../../UI/Button'
import * as style from './style.module.scss'

const Header = () => {
  return (
    <Headroom>
      <Wrapper className={style.header}>
        <Logo orange>Rossi.</Logo>
        <Menu white />
        <Button to={`/get-started`} white arrow line>
          Get Started
        </Button>
      </Wrapper>
    </Headroom>
  )
}

export default Header
