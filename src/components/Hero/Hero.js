import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Wrapper from '../Layout/Wrapper'
import Wheel from './Wheel'
import Screens from './Screens'
import * as style from './style.module.scss'

const Hero = () => {
  const data = useStaticQuery(
    graphql`
      query {
        noise: file(relativePath: { eq: "hero/background.jpg" }) {
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
      <Wrapper className={style.wrapper}>
        <section>
          <Wheel
            color={`#CE7B36`}
            style={{
              position: 'absolute',
              top: '-3.3vw',
              right: '6.5vw',
              width: '9.8vw',
            }}
          />
          <div className={style.text}>
            <h1>We build unforgettable websites for brands {`&`} creatives.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              eu quam et urna aliquet consectetur. In ultricies mi eu tellus
              ornare lacinia.
            </p>
          </div>
        </section>
        <Screens />
      </Wrapper>
    </BackgroundImage>
  )
}

export default Hero
