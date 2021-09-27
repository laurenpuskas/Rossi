import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import scrollTo from 'gatsby-plugin-smoothscroll'

import Wrapper from '../Wrapper'
import Button from '../../UI/Button'
import Contact from '../../Contact'
import links from '../../../constants/links'
import * as style from './style.module.scss'

const Drawer = (props) => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  const data = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "common/background-drawer.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 750) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const background = data.background.childImageSharp.fluid

  return (
    <>
      <div className={`${style.drawer} ${props.open ? style.open : ''}`}>
        <BackgroundImage
          Tag="div"
          fluid={background}
          className={style.background}
        >
          <Wrapper className={style.wrapper}>
            <ul className={style.nav}>
              {links.map((link, index) => {
                return (
                  <li key={index} onClick={() => props.setOpen(!props.open)}>
                    <a onClick={() => scrollTo(link.path)}>{link.name}</a>
                  </li>
                )
              })}
            </ul>
            <Button onClick={toggleModal} white line>
              Get Started
            </Button>
          </Wrapper>
        </BackgroundImage>
      </div>

      {/* {openModal && <Contact onClick={toggleModal} />} */}
    </>
  )
}

export default Drawer
