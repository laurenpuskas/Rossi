import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import * as style from './style.module.scss'

const Screens = () => {
  const data = useStaticQuery(
    graphql`
      query {
        screen: file(relativePath: { eq: "hero/screen.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1270) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const screen = data.screen.childImageSharp.fluid

  return (
    <section className={style.screens}>
      <div className={style.inner}>
        <Img fluid={screen} className={style.screen} />
      </div>
    </section>
  )
}

export default Screens
