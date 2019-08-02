/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const WorkSection = ({ title, subtitle, image, alt, image2 = null, alt2 = null, image3 = null, alt3 = null, children }) => {
  return (
    <section>
      <div className="grid wrapper">
        <div className="grid__item work__text">
          <h4 className="work__subtitle">{subtitle}</h4>
          <h3 className="work__title">{title}</h3>
          {children}
        </div>
        <div className="grid__item grid__image">
          <img src={image} alt={alt} />
          <img src={image2} alt={alt2} />
          <img src={image3} alt={alt3} />
        </div>
      </div>
    </section>
  )
}

export default WorkSection
