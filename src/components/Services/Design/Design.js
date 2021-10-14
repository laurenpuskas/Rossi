import React from 'react'

import Block from './Block'
import * as style from './style.module.scss'

const Design = (props) => {
  const posts = [
    { title: 'Elizabeth & Antonio', image: props.image1 },
    { title: 'Tess & Adriana', image: props.image3 },
    { title: 'Sarah & Luca', image: props.image2 },
  ]

  return (
    <div className={style.design}>
      <header className={style.header}>
        <p className={style.title}>{props.logo}</p>

        <div className={style.menu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={style.links}>
          {props.menu.map((link) => {
            return <span>{link}</span>
          })}
        </div>
      </header>

      <div className={style.posts}>
        {posts.map((post) => {
          return (
            <Block title={post.title} date={post.date} image={post.image} />
          )
        })}
      </div>
    </div>
  )
}

export default Design
