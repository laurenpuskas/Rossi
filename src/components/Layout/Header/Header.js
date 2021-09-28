import React, { useState } from 'react'
import Headroom from 'react-headroom'

import Wrapper from '../Wrapper'
import Logo from '../../Logo'
import Menu from '../../Menu'
import Button from '../../UI/Button'
import Contact from '../../Contact'
import Drawer from '../Drawer'
import {
  logo,
  getStarted,
  CTAFormTitle,
  CTAFormSubtitle,
} from '../../../constants/text'
import * as style from './style.module.scss'

const Header = () => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  const [open, setOpen] = useState(false)

  return (
    <>
      <Headroom className={open ? style.fixed : ''}>
        <Wrapper
          className={`${style.header} ${
            open ? style.headerFixed : ''
          } header-wrap`}
        >
          <Logo orange>{logo}</Logo>
          <Menu open={open} setOpen={setOpen} white />
          <div className={style.button}>
            <Button onClick={toggleModal} white line>
              {getStarted}
            </Button>
          </div>
        </Wrapper>
        <Drawer open={open} setOpen={setOpen} />
      </Headroom>

      {openModal && (
        <Contact
          title={CTAFormTitle}
          subtitle={CTAFormSubtitle}
          onClick={toggleModal}
        />
      )}
    </>
  )
}

export default Header
