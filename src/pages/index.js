import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../helpers/seo'

class PageIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const heroBackground = data.bg.childImageSharp.fluid

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

        <div style={{ height: '3000px' }}>coming soon</div>
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
    bg: file(relativePath: { eq: "hero-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
