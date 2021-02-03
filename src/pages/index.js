import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"
import HeroDesc from "../components/heroDesc.js"
import ImageSliderHero from "../components/imagesliderhero"
import HeaderFont from "../fonts/asado-regular-text.otf"
import BodyFont from "../fonts/asado-body-text.ttf"

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>

      <Helmet>
        <link 
          rel="preload"
          as="font"
          href={HeaderFont}
          type="font/otf"
          crossOrigin="anonymous" 
        />
        <link 
          rel="preload"
          as="font"
          href={BodyFont}
          type="font/ttf"
          crossOrigin="anonymous" 
        />
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>


      <ImageSliderHero />
      
      <div className="site-section" style={{background: "#fcb632"}}>
        <div className="center-wrapper">
          <HeroHeader/>
        </div>
      </div>
      <div className="site-section">
        <div className="center-wrapper">
          <HeroDesc/>
        </div>
      </div>
      {/* <h2>Blog Posts &darr;</h2>
      <div className="grids">
        {Posts}
      </div> */}
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`
