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
            fluid(quality: 100, maxWidth: 2500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const screen = data.screen.childImageSharp.fluid

  return (
    <section className={style.device}>
      <div className={style.dots}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={style.screens}>
        <div className={style.inner}>
          <Img fluid={screen} className={style.screen} />
          <div className={style.cta}>
            <button className={style.button}>Shop the Collection</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Screens
