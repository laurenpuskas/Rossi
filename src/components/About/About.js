import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Wrapper from '../Layout/Wrapper'
import Breadcrumb from '../UI/Breadcrumb'
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
        <Breadcrumb id={`1`}>About</Breadcrumb>

        <div className={style.wrapper}>
          <BackgroundImage Tag="div" fluid={image} className={style.image} />

          <div className={style.text}>
            <h2>
              Lorem <span>ipsum dolor</span>
            </h2>

            <div className={style.columns}>
              <div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>
                <p>
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet. It uses a dictionary of over 200
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                </p>
              </div>
              <div>
                <p>
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet.
                </p>
                <p>
                  It uses a dictionary of over 200 Latin words, combined with a
                  handful of model sentence structures, to generate Lorem Ipsum
                  which looks reasonable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </BackgroundImage>
  )
}

export default About
