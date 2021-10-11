import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Wrapper from '../Layout/Wrapper'
import Wheel from './Wheel'
import Button from '../UI/Button'
import Contact from '../Contact'
import img from '../../images/hero/screen.jpg'
import { CTAFormTitle, CTAFormSubtitle } from '../../constants/text'
import * as style from './style.module.scss'

const Hero = (props) => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  const animation = useAnimation()
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      animation.start('visible')
    }
    if (!inView) {
      animation.start('hidden')
    }
  }, [animation, inView])

  const fade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
        screen: file(relativePath: { eq: "hero/screen.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 625, webpQuality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        backing: file(relativePath: { eq: "hero/backing.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1500) {
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
  const backing = data.backing.childImageSharp.fluid

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
          animate={animation}
          variants={fade}
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

            <BackgroundImage
              className={style.backing}
              Tag="section"
              fluid={backing}
            >
              <div className={style.screen}>
                <img
                  src={img}
                  className={style.imageAnimation}
                  alt={`Made by Rossi`}
                />
              </div>
            </BackgroundImage>
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
