import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'

import Carousel from '../UI/Carousel'
import * as style from './style.module.scss'

const Item = (props) => {
  return (
    <article className={style.wrapper}>
      <div className={style.text}>
        <h2 className={style.title}>{props.title}</h2>
        <MDXRenderer>{props.body}</MDXRenderer>
      </div>
      <div className={style.image}>
        <Carousel>
          <Img fluid={props.image1} />
          <Img fluid={props.image2} />
        </Carousel>
      </div>
    </article>
  )
}

export default Item
