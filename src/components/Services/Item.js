import React, { useState, useEffect } from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Img from 'gatsby-image'

import Carousel from '../UI/Carousel'
import Button from '../UI/Button'
import Contact from '../Contact'
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
        duration: 0.8,
        delay: 0.5,
      },
    },
  }

  const contentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.4,
        delay: 0.6,
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
          <motion.div
            ref={ref}
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
          <Carousel isEven={props.isEven}>
            <Img fluid={props.image} />
            <Img fluid={props.image} />
          </Carousel>
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
