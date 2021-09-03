import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../helpers/seo'
import Hero from '../components/Hero'

class PageIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[
            `websites`,
            `branding`,
            `ecommerce`,
            `web design`,
            `react`,
          ]}
        />
        <Hero />
        <div style={{ height: '3000px' }}> </div>
      </Layout>
    )
  }
}

export default PageIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
