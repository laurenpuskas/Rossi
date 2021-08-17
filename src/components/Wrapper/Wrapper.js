import React from 'react'

const Wrapper = props => {
  return (
    <div
      className={
        props.size == 'large'
          ? ` container flex flex-row items-center mx-auto px-4 md:px-14 w-full ` +
            props.classes
          : ' ' + props.classes
      }
    >
      {props.children}
    </div>
  )
}

export default Wrapper
