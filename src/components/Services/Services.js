import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Wrapper from '../Layout/Wrapper'
import Breadcrumb from '../UI/Breadcrumb'
import Item from './Item'
import { servicesLabel } from '../../constants/text'
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
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        backgroundLight: file(
          relativePath: { eq: "services/background-light.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2880) {
              ...GatsbyImageSharpFluid_withWebp
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
      id="Services"
      Tag="div"
      fluid={isEven(props.id) ? backgroundLight : backgroundDark}
    >
      <Wrapper
        className={`${style.services} ${isEven(props.id) ? '' : style.dark}`}
        maxWidth={`1600px`}
      >
        <Breadcrumb id={`2`}>{servicesLabel}</Breadcrumb>
        <Item
          title={props.title}
          body={props.body}
          image={props.image}
          isEven={isEven(props.id)}
        />
      </Wrapper>
    </BackgroundImage>
  )
}

export default Services
