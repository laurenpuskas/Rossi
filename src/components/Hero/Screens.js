import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import * as style from './style.module.scss'

const Screens = () => {
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

  const fadeVariantTop = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 5.8,
        duration: 2,
      },
    },
  }

  const fadeVariantBottom = {
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

  const screen1 = data.screen1.childImageSharp.fluid
  const screen2 = data.screen2.childImageSharp.fluid

  return (
    <section>
      <motion.div
        className={style.screen}
        ref={ref}
        initial="hidden"
        animate={fadeAnimation}
        variants={fadeVariantTop}
      >
        <Img fluid={screen1} />
      </motion.div>

      <motion.div
        className={style.screen}
        ref={ref}
        initial="hidden"
        animate={fadeAnimation}
        variants={fadeVariantBottom}
      >
        <Img fluid={screen2} />
      </motion.div>
    </section>
  )
}

export default Screens
