import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Wrapper from '../Layout/Wrapper'
import Wheel from './Wheel'
import Button from '../UI/Button'
import Contact from '../Contact'
import Screens from './Screens'
import { CTAFormTitle, CTAFormSubtitle } from '../../constants/text'
import * as style from './style.module.scss'

const Hero = (props) => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  const fadeAnimation = useAnimation()
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      fadeAnimation.start('visible')
    }
    if (!inView) {
      fadeAnimation.start('hidden')
    }
  }, [fadeAnimation, inView])

  const fadeVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 5.3,
        duration: 1.3,
      },
    },
  }

  const data = useStaticQuery(
    graphql`
      query {
        desktopBG: file(relativePath: { eq: "hero/background.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2880) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        mobileBG: file(relativePath: { eq: "hero/background-mobile.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 750) {
              ...GatsbyImageSharpFluid_withWebp
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
        <motion.div
          ref={ref}
          initial="hidden"
          animate={fadeAnimation}
          variants={fadeVariant}
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
        </motion.div>
      </BackgroundImage>

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

export default Hero
