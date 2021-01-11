/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import "./section-topbanner.scss"

const WorkBanner = ({ projectTitle, projectType, projectImage }) => {
  return (
    <section className="single-page__header">
      <div className="wrapper">
        <h1 className="single-page__header__title">{projectTitle}</h1>
        <span className="h3 single-page__header__subtitle">{projectType}</span>
      </div>
      <img src={projectImage.src} alt={projectImage.alt} data-in-view />
    </section>
  )
}

export default WorkBanner
