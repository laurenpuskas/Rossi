import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import BackgroundImage from 'gatsby-background-image'

import Wrapper from '../Layout/Wrapper'
import Breadcrumb from '../UI/Breadcrumb'
import Accordion from '../UI/Accordion'
import Item from '../UI/Accordion/Item'
import Button from '../UI/Button'
import Footer from '../Layout/Footer'
import Contact from '../Contact'
import faqs from '../../constants/faq'
import {
  FAQLabel,
  FAQTitle,
  FAQSubtitle,
  FAQDescription,
  FAQPrompt,
  FAQButton,
  tel,
  email,
} from '../../constants/text'
import * as style from './style.module.scss'

const FAQ = () => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  const titleAnimation = useAnimation()
  const contentAnimation = useAnimation()
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      titleAnimation.start('visible')
      contentAnimation.start('visible')
    }
    if (!inView) {
      titleAnimation.start('hidden')
      contentAnimation.start('hidden')
    }
  }, [titleAnimation, inView])

  const titleVariant = {
    hidden: {
      opacity: 0,
      rotateY: '10deg',
      rotateX: '75deg',
      rotateZ: '-9deg',
    },
    visible: {
      opacity: 1,
      rotateY: '0deg',
      rotateX: '0deg',
      rotateZ: '0deg',
      transition: {
        duration: 0.6,
      },
    },
  }

  const subtitleVariant = {
    hidden: {
      opacity: 0,
      rotateY: '10deg',
      rotateX: '75deg',
      rotateZ: '-9deg',
    },
    visible: {
      opacity: 1,
      rotateY: '0deg',
      rotateX: '0deg',
      rotateZ: '0deg',
      transition: {
        duration: 0.6,
        delay: 0.1,
      },
    },
  }

  const contentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.4,
      },
    },
  }

  const data = useStaticQuery(
    graphql`
      query {
        desktopBG: file(relativePath: { eq: "common/background-footer.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 2880) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        mobileBG: file(
          relativePath: { eq: "common/background-footer-mobile.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 750) {
              ...GatsbyImageSharpFluid_withWebp
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
    <>
      <BackgroundImage id="FAQ" Tag="div" fluid={sources} className={style.faq}>
        <Wrapper maxWidth={`1600px`}>
          <Breadcrumb id={`3`} white>
            {FAQLabel}
          </Breadcrumb>
          <motion.h2
            ref={ref}
            initial="hidden"
            animate={titleAnimation}
            variants={titleVariant}
            className={style.title}
            dangerouslySetInnerHTML={{ __html: FAQTitle }}
          />
          <motion.h2
            ref={ref}
            initial="hidden"
            animate={titleAnimation}
            variants={subtitleVariant}
            className={style.subtitle}
            dangerouslySetInnerHTML={{ __html: FAQSubtitle }}
          />
          <motion.div
            ref={ref}
            initial="hidden"
            animate={contentAnimation}
            variants={contentVariant}
            className={style.grid}
          >
            <div className={style.text}>
              <div dangerouslySetInnerHTML={{ __html: FAQDescription }} />
              <ul className={style.contacts}>
                <li>
                  <div className={style.icon}>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="phone"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                        class=""
                      ></path>
                    </svg>
                  </div>
                  <span>
                    <a href={`tel:${tel}`}>{tel}</a>
                  </span>
                </li>
                <li>
                  <div className={style.icon}>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="envelope"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                        class=""
                      ></path>
                    </svg>
                  </div>
                  <span>
                    <a href={`mailto:${email}`}>{email}</a>
                  </span>
                </li>
              </ul>
              <h5>{FAQPrompt}</h5>
              <Button onClick={toggleModal} orange arrow>
                {FAQButton}
              </Button>
            </div>
            <div className={style.accordion}>
              <Accordion>
                {faqs.map((faq) => {
                  return (
                    <Item label={faq.question} id={faq.id}>
                      {faq.answer}
                    </Item>
                  )
                })}
              </Accordion>
            </div>
          </motion.div>
        </Wrapper>
        <Footer />
      </BackgroundImage>

      {openModal && <Contact onClick={toggleModal} />}
    </>
  )
}

export default FAQ
