import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../helpers/seo'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import FAQ from '../components/FAQ'

class PageIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const services = data.allMdx.nodes

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
        <Hero
          title={`We build unforgettable websites for brands & creatives.`}
          subtitle={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              eu quam et urna aliquet consectetur. In ultricies mi eu tellus
              ornare lacinia.`}
          buttonText={`Get Started`}
          buttonURL={`/get-started`}
        />
        <About />
        {services.map((service) => {
          return (
            <Services
              key={service.frontmatter.id}
              slug={service.fields.slug}
              excerpt={service.excerpt}
              id={service.frontmatter.id}
              title={service.frontmatter.title}
              body={service.body}
              image1={service.frontmatter.image1.childImageSharp.fluid}
              image2={service.frontmatter.image2.childImageSharp.fluid}
            />
          )
        })}
        <FAQ />
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
    allMdx(sort: { fields: [frontmatter___id], order: ASC }) {
      nodes {
        body
        fields {
          slug
        }
        frontmatter {
          title
          id
          image1 {
            childImageSharp {
              fluid(maxWidth: 1180, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image2 {
            childImageSharp {
              fluid(maxWidth: 1180, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
