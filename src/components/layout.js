import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import ThemeChanger from "../components/themeChanger"
import "prismjs/themes/prism-okaidia.css"


import NavLogo from "../images/asado-barca-logo.png"


export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <>
      <div className="site-section" style={{borderBottom: "10px solid #fcb632"}}>
        <div className="center-wrapper">
          <header className="site-header">
          <ThemeChanger/>
            <div className="site-title">
              <Link to="/"><img src={NavLogo} style={{width: "6rem", height: "6rem"}} /></Link>
            </div>
            <Navigation />
          </header>
        </div>
      </div>
      <div className="site-section">
        {children}
        <footer className="site-footer">
          <p>&copy; {new Date().getFullYear()} Asado Barcalona &bull; Created by <a href="https://rowangordon.co.uk">Rowan Gordon</a></p>
        </footer>
      </div>
    </>
  )
}
