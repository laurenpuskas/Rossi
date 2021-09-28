import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Wrapper from '../Layout/Wrapper'
import Breadcrumb from '../UI/Breadcrumb'
import { aboutLabel, aboutTitle, aboutDescription } from '../../constants/text'
import * as style from './style.module.scss'

const About = () => {
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
            <h2 dangerouslySetInnerHTML={{ __html: aboutTitle }} />

            <div
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
