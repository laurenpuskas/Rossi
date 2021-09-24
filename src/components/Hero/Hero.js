import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Wrapper from '../Layout/Wrapper'
import Wheel from './Wheel'
import Button from '../UI/Button'
import Contact from '../Contact'
import Screens from './Screens'
import * as style from './style.module.scss'

const Hero = (props) => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  const data = useStaticQuery(
    graphql`
      query {
        desktopBG: file(relativePath: { eq: "hero/background.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2880) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mobileBG: file(relativePath: { eq: "hero/background-mobile.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 750) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const sources = [
    data.mobileBG.childImageSharp.fluid,
    {
      ...data.desktopBG.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  return (
    <>
      <BackgroundImage
        id="Home"
        Tag="div"
        fluid={sources}
        className={style.hero}
      >
        <Wrapper className={style.wrapper}>
          <section>
            <Wheel
              color={`#CE7B36`}
              style={{
                position: 'absolute',
                top: '-3.3vw',
                right: '6.5vw',
                width: '9.8vw',
              }}
            />
            <div className={style.text}>
              <h1>{props.title}</h1>
              <p>{props.subtitle}</p>
              <Button onClick={toggleModal} arrow white>
                {props.buttonText}
              </Button>
            </div>
          </section>
          <Screens />
        </Wrapper>
      </BackgroundImage>

      {openModal && <Contact onClick={toggleModal} />}
    </>
  )
}

export default Hero
