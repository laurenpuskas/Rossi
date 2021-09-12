import React, { useState } from 'react'

import Item from './Item'

const Accordion = ({ defaultIndex, onItemClick, children }) => {
  const [bindIndex, setBindIndex] = useState(defaultIndex)

  const changeItem = (itemIndex) => {
    if (typeof onItemClick === 'function') onItemClick(itemIndex)
    if (itemIndex !== bindIndex) setBindIndex(itemIndex)
  }
  const items = children.filter((item) => item.type.name === 'Item')

  return (
    <>
      {items.map(({ props }) => (
        <Item
          isCollapsed={bindIndex !== props.index}
          label={props.label}
          handleClick={() => changeItem(props.index)}
          children={props.children}
        />
      ))}
    </>
  )
}

export default Accordion
