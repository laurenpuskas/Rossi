import React from 'react'

import Wrapper from '../Wrapper'
import Logo from '../../Logo'
import Button from '../../UI/Button'
import links from '../../../constants/links'
import * as style from './style.module.scss'

const Footer = (props) => {
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
                      href={link.path}
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

            <Button href={`/get-started`} white line>
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
    </>
  )
}

export default Footer
