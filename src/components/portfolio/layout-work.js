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
<<<<<<< HEAD:src/components/methods/layout-method.js
import MethodLayoutBanner from "./section-topbanner"
import MoreProjects from "./section-more-methods"
=======
import WorkBanner from "./section-topbanner"
import WorkMoreProjects from "./section-more-projects"
>>>>>>> develop-portfolio:src/components/portfolio/layout-work.js

import "../layout.scss"
import "./layout-work.scss"

<<<<<<< HEAD:src/components/methods/layout-method.js
const MethodLayout = ({ pageTitle, method, children }) => {
=======
const WorkLayout = ({ projectTitle, projectType, project, children }) => {
>>>>>>> develop-portfolio:src/components/portfolio/layout-work.js
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
<<<<<<< HEAD:src/components/methods/layout-method.js
        <MoreProjects project={method} />
=======
        <WorkMoreProjects project={project} />
>>>>>>> develop-portfolio:src/components/portfolio/layout-work.js
      </main>
      <Footer />
    </>
  )
}

WorkLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WorkLayout
