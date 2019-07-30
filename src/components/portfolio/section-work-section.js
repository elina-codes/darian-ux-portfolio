/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const WorkSection = ({ title, subtitle, image, alt, children }) => {
  return (
    <section>
      <div className="grid wrapper">
        <div className="grid__item work__text">
          <h4>{subtitle}</h4>
          <h3>{title}</h3>
          {children}
        </div>
        <div className="grid__item grid__image">
          <img src={image} alt={alt} />
        </div>
      </div>
    </section>
  )
}

export default WorkSection
