import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'

import Carousel from '../UI/Carousel'
import Button from '../UI/Button'
import * as style from './style.module.scss'

const Item = (props) => {
  return (
    <article className={style.wrapper}>
      <div className={style.text}>
        <h2 className={style.title}>{props.title}</h2>
        <MDXRenderer>{props.body}</MDXRenderer>
        <Button href={`/get-started`} white={props.isEven ? '' : 'white'} arrow>
          Get Started
        </Button>
      </div>
      <div className={style.image}>
        <Carousel isEven={props.isEven}>
          <Img fluid={props.image1} />
          <Img fluid={props.image2} />
        </Carousel>
      </div>
    </article>
  )
}

export default Item
