/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../common/header"
import Footer from "../common/footer"
import WorkBanner from "./section-topbanner"
import WorkMoreProjects from "./section-more-projects"

import "../layout.scss"
import "./layout-work.scss"

const WorkLayout = ({ projectTitle, projectType, project, children }) => {
  const data = useStaticQuery(graphql`
    query ProjectTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <WorkMoreProjects project={project} className="more-projects--top" />
      <main className="work-layout">
        <WorkBanner
          projectTitle={projectTitle}
          projectType={projectType}
          projectImage={project.images.main}
        />
        {children}
        <WorkMoreProjects project={project} />
      </main>
      <Footer />
    </>
  )
}

WorkLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WorkLayout
