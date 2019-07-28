import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <nav id="js--mobile-nav">
      <Link href="https://uxitall.com" >
        <span>UX Methods</span>
      </Link>
      <a to="/" className="active">
        <span>Portfolio</span>
      </a>
      <a href="#contact">
        <span>Contact</span>
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
