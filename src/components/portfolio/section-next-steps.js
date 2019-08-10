/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const NextSteps = ({ title, subtitle, children }) => {
  return (
    <section className="next-steps">
      <div className="grid wrapper">
        <div className="grid__item work__text">
          <h4 className="work__subtitle">{subtitle ? subtitle : ""}</h4>
          <h2 className="work__title">{title ? title : "Next Steps"}</h2>
        </div>
        <div className="grid__item grid__image">{children}</div>
      </div>
    </section>
  )
}

export default NextSteps
