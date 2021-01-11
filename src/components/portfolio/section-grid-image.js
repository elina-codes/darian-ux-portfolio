/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const GridImage = ({ children }) => {
  return (
    <div className="grid__item grid__image">
      {children}
    </div>
  )
}

export default GridImage
