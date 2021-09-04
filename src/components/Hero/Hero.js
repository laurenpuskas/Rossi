import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import * as style from './style.module.scss'

const Hero = () => {
  const data = useStaticQuery(
    graphql`
      query {
        noise: file(relativePath: { eq: "hero-bg.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 2880) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const background = data.noise.childImageSharp.fluid

  return (
    <BackgroundImage Tag="div" fluid={background} className={style.hero}>
      test
    </BackgroundImage>
  )
}

export default Hero
