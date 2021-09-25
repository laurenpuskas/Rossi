import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Wrapper from '../Wrapper'
import Button from '../../UI/Button'
import * as style from './style.module.scss'

const Page = (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktopBG: file(relativePath: { eq: "hero/background.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2880) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mobileBG: file(relativePath: { eq: "hero/background-mobile.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 750) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const sources = [
    data.mobileBG.childImageSharp.fluid,
    {
      ...data.desktopBG.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  return (
    <BackgroundImage id="Home" Tag="div" fluid={sources} className={style.hero}>
      <Wrapper className={style.wrapper}>
        <div className={style.page}>
          {props.children}
          <Button href={`/`} arrow orange>
            Go Back
          </Button>
        </div>
      </Wrapper>
    </BackgroundImage>
  )
}

export default Page
