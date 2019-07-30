/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import "./section-topbanner.scss"

const WorkBanner = ({ projectTitle, projectType }) => {
  return (
    <section className="single-page__header">
      <div className="wrapper wrapper--short">
        <h1 className="single-page__header__title">{projectTitle}</h1>
        <span className="h3 single-page__header__subtitle">{projectType}</span>
      </div>
    </section>
  )
}

export default WorkBanner
