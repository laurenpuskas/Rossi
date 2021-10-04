import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'

import Wrapper from '../Layout/Wrapper'
import Wheel from './Wheel'
import Button from '../UI/Button'
import Contact from '../Contact'
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
        delay: 5.3,
        duration: 1.3,
      },
    },
  }

  const fadeScreenTop = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 5.8,
        duration: 2,
      },
    },
  }

  const fadeScreenBottom = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 6.1,
        duration: 2,
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
        screen1: file(relativePath: { eq: "hero/screen1.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        screen2: file(relativePath: { eq: "hero/screen2.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1000) {
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
  const screen1 = data.screen1.childImageSharp.fluid
  const screen2 = data.screen2.childImageSharp.fluid

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

            <section>
              <motion.div
                ref={ref}
                initial="hidden"
                className={style.screen}
                animate={animation}
                variants={fadeScreenTop}
              >
                <Img fluid={screen1} />
              </motion.div>

              <motion.div
                ref={ref}
                initial="hidden"
                className={style.screen}
                animate={animation}
                variants={fadeScreenBottom}
              >
                <Img fluid={screen2} />
              </motion.div>
            </section>
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
