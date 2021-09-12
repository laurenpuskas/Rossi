import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Wrapper from '../Layout/Wrapper'
import Breadcrumb from '../UI/Breadcrumb'
import Accordion from '../UI/Accordion'
import Item from '../UI/Accordion/Item'
import Button from '../UI/Button'
import faqs from '../../constants/faq'
import * as style from './style.module.scss'

const FAQ = () => {
  const data = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "common/background-footer.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 2880) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const background = data.background.childImageSharp.fluid

  return (
    <BackgroundImage Tag="div" fluid={background} className={style.faq}>
      <Wrapper maxWidth={`1600px`}>
        <Breadcrumb id={`3`} white>
          FAQ
        </Breadcrumb>

        <h2 className={style.title}>
          Lorem <span>ipsum dolor</span>
        </h2>

        <div className={style.grid}>
          <div className={style.text}>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
            <p>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable.
            </p>
            <h5>Have another question?</h5>
            <Button href={`/contact`} orange arrow>
              Ask a Question
            </Button>
          </div>

          <div className={style.accordion}>
            <Accordion defaultIndex={`1`}>
              {faqs.map((faq) => {
                return (
                  <Item label={faq.question} index={faq.id}>
                    {faq.answer}
                  </Item>
                )
              })}
            </Accordion>
          </div>
        </div>
      </Wrapper>
    </BackgroundImage>
  )
}

export default FAQ
