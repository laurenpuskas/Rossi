import React, { useState } from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'

import Carousel from '../UI/Carousel'
import Button from '../UI/Button'
import Contact from '../Contact'
import * as style from './style.module.scss'

const Item = (props) => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      <article className={style.wrapper}>
        <div className={style.text}>
          <h2>{props.title}</h2>
          <MDXRenderer>{props.body}</MDXRenderer>
          <Button
            onClick={toggleModal}
            white={props.isEven ? '' : 'white'}
            arrow
          >
            Get Started
          </Button>
        </div>
        <div className={style.image}>
          <Carousel isEven={props.isEven}>
            <Img fluid={props.image} />
            <Img fluid={props.image} />
          </Carousel>
        </div>
      </article>

      {/* {openModal && <Contact onClick={toggleModal} />} */}
    </>
  )
}

export default Item
