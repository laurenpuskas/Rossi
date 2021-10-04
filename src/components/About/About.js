import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'

import Wrapper from '../Layout/Wrapper'
import Breadcrumb from '../UI/Breadcrumb'
import {
  aboutLabel,
  aboutTitle,
  aboutSubtitle,
  aboutDescription,
} from '../../constants/text'
import * as style from './style.module.scss'

const About = () => {
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

  const device = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  }

  const title = {
    hidden: {
      opacity: 0,
      rotateY: '10deg',
      rotateX: '75deg',
      rotateZ: '-9deg',
    },
    visible: {
      opacity: 1,
      rotateY: '0deg',
      rotateX: '0deg',
      rotateZ: '0deg',
      transition: {
        duration: 0.6,
      },
    },
  }

  const subtitle = {
    hidden: {
      opacity: 0,
      rotateY: '10deg',
      rotateX: '75deg',
      rotateZ: '-9deg',
    },
    visible: {
      opacity: 1,
      rotateY: '0deg',
      rotateX: '0deg',
      rotateZ: '0deg',
      transition: {
        duration: 0.6,
        delay: 0.1,
      },
    },
  }

  const content = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.4,
      },
    },
  }

  const data = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "about/background.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2878) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        base: file(relativePath: { eq: "about/about-base.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        screen: file(relativePath: { eq: "about/about-screen.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 667) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  const background = data.background.childImageSharp.fluid
  const base = data.base.childImageSharp.fluid
  const screen = data.screen.childImageSharp.fluid

  return (
    <BackgroundImage
      id="About"
      Tag="div"
      fluid={background}
      className={style.background}
    >
      <Wrapper className={style.about} maxWidth={`1600px`}>
        <Breadcrumb id={`1`}>{aboutLabel}</Breadcrumb>

        <div className={style.wrapper}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={animation}
            variants={device}
            className={style.image}
          >
            <Img fluid={base} />
            <div className={style.screen}>
              <Img fluid={screen} className={style.imageAnimation} />
            </div>
          </motion.div>

          <div className={style.text}>
            <motion.h2
              ref={ref}
              initial="hidden"
              animate={animation}
              variants={title}
              dangerouslySetInnerHTML={{ __html: aboutTitle }}
            />
            <motion.h2
              ref={ref}
              initial="hidden"
              animate={animation}
              variants={subtitle}
              className={style.highlight}
              dangerouslySetInnerHTML={{ __html: aboutSubtitle }}
            />

            <motion.div
              ref={ref}
              initial="hidden"
              animate={animation}
              variants={content}
              className={style.columns}
              dangerouslySetInnerHTML={{ __html: aboutDescription }}
            />
          </div>
        </div>
      </Wrapper>
    </BackgroundImage>
  )
}

export default About
