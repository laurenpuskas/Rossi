import React, { useState, useEffect } from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Img from 'gatsby-image'

import Carousel from '../UI/Carousel'
import Button from '../UI/Button'
import Contact from '../Contact'
import Design from './Design'
import Websites from './Websites'
import {
  getStarted,
  servicesFormTitle,
  servicesFormSubtitle,
} from '../../constants/text'
import * as style from './style.module.scss'

const Item = (props) => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  const titleAnimation = useAnimation()
  const contentAnimation = useAnimation()
  const imageAnimation = useAnimation()
  const baseAnimation = useAnimation()
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      titleAnimation.start('visible')
      contentAnimation.start('visible')
      imageAnimation.start('visible')
      baseAnimation.start('visible')
    }
    if (!inView) {
      titleAnimation.start('hidden')
      contentAnimation.start('hidden')
      imageAnimation.start('hidden')
      baseAnimation.start('hidden')
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

  const contentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.4,
      },
    },
  }

  const imageVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.4,
      },
    },
  }

  const baseVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.4,
        delay: 0.5,
      },
    },
  }

  return (
    <>
      <article className={style.wrapper}>
        <div className={style.text}>
          <motion.h2
            ref={ref}
            initial="hidden"
            animate={titleAnimation}
            variants={titleVariant}
            className={style.title}
          >
            {props.title}
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={titleAnimation}
            variants={titleVariant}
            className={style.subtitle}
          >
            {props.subtitle}
          </motion.p>
          <motion.div
            initial="hidden"
            animate={contentAnimation}
            variants={contentVariant}
          >
            <MDXRenderer>{props.body}</MDXRenderer>
            <Button
              onClick={toggleModal}
              white={props.isEven ? '' : 'white'}
              arrow
            >
              {getStarted}
            </Button>
          </motion.div>
        </div>

        <div className={style.image}>
          {props.type === 'carousel' ? (
            <Carousel isEven={props.isEven}>
              <Img fluid={props.image} />
              <Img fluid={props.image} />
            </Carousel>
          ) : (
            <div className={style.imageWrap}>
              <div className={props.isEven ? style.mainImgEven : style.mainImg}>
                {props.title === 'Design' ? (
                  <Design
                    logo={`Anna Rodriguez`}
                    menu={['Blog', 'About', 'Contact']}
                    image1={props.image1}
                    image2={props.image2}
                    image3={props.image3}
                    image4={props.image4}
                  />
                ) : props.title === 'Websites' ? (
                  <Websites
                    logo={`Everlane Architects`}
                    text={`Everlane Architects is an award winning group of residential architects in the Bay Area.`}
                    image1={props.image1}
                    image2={props.image2}
                    image3={props.image3}
                    image4={props.image4}
                    image5={props.image5}
                  />
                ) : (
                  <motion.div
                    className={style.inner}
                    initial="hidden"
                    animate={imageAnimation}
                    variants={imageVariant}
                  >
                    <Img fluid={props.image1} />
                  </motion.div>
                )}
              </div>
              <motion.div
                initial="hidden"
                animate={baseAnimation}
                variants={baseVariant}
              >
                <Img fluid={props.base} className={style.baseImg} />
              </motion.div>
            </div>
          )}
        </div>
      </article>

      {openModal && (
        <Contact
          title={servicesFormTitle}
          subtitle={servicesFormSubtitle}
          onClick={toggleModal}
        />
      )}
    </>
  )
}

export default Item
