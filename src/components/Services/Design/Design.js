import React from 'react'

import Block from './Block'
import * as style from './style.module.scss'

const Design = (props) => {
  const posts = [
    { title: 'Elizabeth & Antonio', date: '02.09.20', image: props.image1 },
    { title: 'Tess & Adriana', date: '04.05.20', image: props.image3 },
    { title: 'Sarah & Luca', date: '07.07.20', image: props.image2 },
    { title: 'Brittni & Austin', date: '10.01.20', image: props.image4 },
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
        {posts.map((post, index) => {
          return (
            <Block
              title={post.title}
              date={post.date}
              image={post.image}
              id={`${index}`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Design
