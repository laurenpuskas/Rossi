import React from 'react'

import Block from './Block'
import * as style from './style.module.scss'

const Design = (props) => {
  const posts = [
    { title: 'Elizabeth & Antonio', date: '9/16/20', image: props.image1 },
    { title: 'Tess & Adriana', date: '1/31/21', image: props.image3 },
    { title: 'Sarah & Luca', date: '10/20/20', image: props.image2 },
    { title: 'Rachel & Andrew', date: '3/02/21', image: props.image4 },
    { title: 'Audrey & Michael', date: '5/10/21', image: props.image5 },
    { title: 'Cara & John', date: '6/22/21', image: props.image6 },
    { title: 'Georgia & Cameron', date: '8/19/21', image: props.image7 },
  ]

  return (
    <div className={style.design}>
      <header className={style.header}>
        <p className={style.title}>{props.logo}</p>
        <ul className={style.links}>
          {props.menu.map((link) => {
            return (
              <li>
                <span>{link}</span>
              </li>
            )
          })}
        </ul>
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
