import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { motion } from 'framer-motion'

import * as style from './style.module.scss'

const Loading = (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "services/background-dark.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2880) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  const background = data.background.childImageSharp.fluid

  return (
    <motion.div
      className={style.loading}
      animate={{
        opacity: ['0%', '100%', '100%', '0%', '0%'],
        x: ['0%', '0%', '0%', '0%', '-100%'],
      }}
      transition={{
        duration: 6,
        ease: 'easeInOut',
        times: [0, 0.2, 0.8, 0.9, 1],
        loop: false,
      }}
    >
      <BackgroundImage
        Tag="div"
        fluid={background}
        className={style.background}
      >
        <motion.h1
          className={style.title}
          animate={{
            opacity: ['0%', '100%'],
          }}
          transition={{
            delay: 0.7,
            duration: 1,
            ease: 'easeInOut',
            times: [0, 1],
            loop: false,
          }}
        >
          <motion.span
            animate={{
              color: ['#2f2f2f', '#fff'],
            }}
            transition={{
              delay: 2,
              duration: 2,
              ease: 'easeInOut',
              times: [0, 1],
              loop: false,
            }}
          >
            {props.title}
          </motion.span>
        </motion.h1>
      </BackgroundImage>
    </motion.div>
  )
}

export default Loading
