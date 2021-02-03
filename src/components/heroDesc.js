import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingDescQuery {
        site {
          siteMetadata {
            home {
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div 
          className="primary-content" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
        />
      </div>
    )}
  />
)