import React from 'react'
import { wrapRootElement as wrap } from './wrap-root-element'

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([
    <div
      key={pluginOptions.key ? pluginOptions.key : 'my-portal'}
      id={pluginOptions.id ? pluginOptions.id : 'my-portal'}
    >
      {pluginOptions.text}
    </div>,
  ])
}

export const wrapRootElement = wrap
