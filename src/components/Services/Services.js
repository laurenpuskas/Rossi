import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Wrapper from '../Layout/Wrapper'
import Breadcrumb from '../UI/Breadcrumb'
import Item from './Item'
import * as style from './style.module.scss'

const Services = (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        backgroundDark: file(
          relativePath: { eq: "services/background-dark.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2880) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        backgroundLight: file(
          relativePath: { eq: "services/background-light.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2880) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const backgroundDark = data.backgroundDark.childImageSharp.fluid
  const backgroundLight = data.backgroundLight.childImageSharp.fluid

  function isEven(num) {
    return num % 2 == 0
  }

  return (
    <BackgroundImage
      Tag="div"
      fluid={isEven(props.id) ? backgroundLight : backgroundDark}
    >
      <Wrapper
        className={`${style.services} ${isEven(props.id) ? '' : style.dark}`}
        maxWidth={`1600px`}
      >
        <Breadcrumb id={`2`}>Services</Breadcrumb>
        <Item
          title={props.title}
          body={props.body}
          image1={props.image1}
          image2={props.image2}
          isEven={isEven(props.id)}
        />
      </Wrapper>
    </BackgroundImage>
  )
}

export default Services
