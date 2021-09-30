import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

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
  const titleAnimation = useAnimation()
  const contentAnimation = useAnimation()
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      titleAnimation.start('visible')
      contentAnimation.start('visible')
    }
    if (!inView) {
      titleAnimation.start('hidden')
      contentAnimation.start('hidden')
    }
  }, [titleAnimation, inView])

  const titleVariant = {
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

  const subtitleVariant = {
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

  const contentVariant = {
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
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image: file(relativePath: { eq: "about/image.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 880) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const background = data.background.childImageSharp.fluid
  const image = data.image.childImageSharp.fluid

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
          <BackgroundImage Tag="div" fluid={image} className={style.image} />

          <div className={style.text}>
            <motion.h2
              ref={ref}
              initial="hidden"
              animate={titleAnimation}
              variants={titleVariant}
              dangerouslySetInnerHTML={{ __html: aboutTitle }}
            />
            <motion.h2
              ref={ref}
              initial="hidden"
              animate={titleAnimation}
              variants={subtitleVariant}
              className={style.highlight}
              dangerouslySetInnerHTML={{ __html: aboutSubtitle }}
            />

            <motion.div
              ref={ref}
              initial="hidden"
              animate={contentAnimation}
              variants={contentVariant}
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
