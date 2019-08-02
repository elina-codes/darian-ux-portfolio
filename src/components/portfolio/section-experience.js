/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const ExperienceItem = ({ date, company, position, children }) => {
  return (
    <div className="grid experience-item">
      <div className="grid__item experience-item__title">
        <h3 className="experience-item__company">{company}</h3>
        <h3 className="h4 experience-item__date">{date}</h3>
      </div>
      <div className="grid__item experience-item__details">
        <h3 className="experience-item__position">{position}</h3>
        <div className="experience-item__duties">{children}</div>
      </div>
    </div>
  )
}

export default ExperienceItem
