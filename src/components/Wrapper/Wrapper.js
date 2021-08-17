import React from 'react'

const Wrapper = props => {
  return (
    <div
      className={
        props.size == 'large'
          ? `container flex flex-row items-center mx-auto px-4 md:px-14 py-3 md:py-8 w-full`
          : ''
      }
    >
      {props.children}
    </div>
  )
}

export default Wrapper
