import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Wrapper from '../Wrapper'
import Button from '../../UI/Button'
import links from '../../../constants/links'
import * as style from './style.module.scss'

const Drawer = (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "common/background-drawer.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 750) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const background = data.background.childImageSharp.fluid

  return (
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
                <li key={index}>
                  <a href={link.path}>{link.name}</a>
                </li>
              )
            })}
          </ul>

          <Button href={`/get-started`} white line>
            Get Started
          </Button>
        </Wrapper>
      </BackgroundImage>
    </div>
  )
}

export default Drawer
