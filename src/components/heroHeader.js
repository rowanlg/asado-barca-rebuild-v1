import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header" style={{textAlign: "center"}}>
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        {/* <Link to='/contact' className="button -primary">Get in touch &rarr;</Link> */}
      </div>
    )}
  />
)