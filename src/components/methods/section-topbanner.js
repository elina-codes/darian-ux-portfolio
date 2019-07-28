/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import "./section-topbanner.scss"
import bannerBg from "../../images/darian_bg.jpg"

const WorkBanner = ({ projectTitle, projectType }) => {
  return (
    <section className="work__header" style={{
        backgroundImage: `url(${bannerBg})`,
      }}>
      <div className="wrapper wrapper--short">
        <h1 className="work__header__title">{projectTitle}</h1>
        <span className="h4 work__header__subtitle">{projectType}</span>
      </div>
    </section>
  )
}

export default WorkBanner
