import React from 'react'
import { MDXProvider } from '@mdx-js/react'

const components = {
  pre: (preProps) => {
    return <pre {...preProps} />
  },
}
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
