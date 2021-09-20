import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import * as style from './style.module.scss'

const Screens = () => {
  const data = useStaticQuery(
    graphql`
      query {
        screen1: file(relativePath: { eq: "hero/screen1.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        screen2: file(relativePath: { eq: "hero/screen2.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1000) {
              ...GatsbyImageSharpFluid
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
      <Img fluid={screen1} className={style.screen} />
      <Img fluid={screen2} className={style.screen} />
    </section>
  )
}

export default Screens
