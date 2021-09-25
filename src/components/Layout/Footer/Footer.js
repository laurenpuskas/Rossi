import React, { useState } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

import Wrapper from '../Wrapper'
import Logo from '../../Logo'
import Button from '../../UI/Button'
import Contact from '../../Contact'
import links from '../../../constants/links'
import * as style from './style.module.scss'

const Footer = (props) => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      <div className={style.footer}>
        <Wrapper width={`1600px`}>
          <div className={style.grid}>
            <Logo orange>Rossi.</Logo>

            <ul className={style.nav}>
              {links.map((link, index) => {
                return (
                  <li key={index}>
                    <a
                      onClick={() => scrollTo(link.path)}
                      className={
                        props.white
                          ? style.white
                          : props.orange
                          ? style.orange
                          : ''
                      }
                    >
                      {link.name}
                    </a>
                  </li>
                )
              })}
            </ul>

            <Button onClick={toggleModal} white line>
              Get Started
            </Button>
          </div>
        </Wrapper>
      </div>

      <div className={style.copyright}>
        <Wrapper width={`1600px`}>
          Copyright {new Date().getFullYear()}, Rossi. All rights reserved.
        </Wrapper>
      </div>

      {openModal && <Contact onClick={toggleModal} />}
    </>
  )
}

export default Footer
