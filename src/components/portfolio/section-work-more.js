/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"

import projects from "../../data/projects"

const findNext = (current, obj) => {
  const key = Object.keys(obj)
    .filter(item => obj[item] === current)
    .join("")
  const keys = Object.keys(obj)
  const len = Object.keys(obj).length

  if (keys.indexOf(key) > -1) {
    const nextIndex = (keys.indexOf(key) + 1) % len
    var next = keys[nextIndex]
    return obj[next]
  }
}

const findPrev = (current, obj) => {
  const key = Object.keys(obj)
    .filter(item => obj[item] === current)
    .join("")
  const keys = Object.keys(obj)
  const len = Object.keys(obj).length

  if (keys.indexOf(key) > -1) {
    const prevIndex = (keys.indexOf(key) - 1) % len
    var prev = keys[prevIndex]
    return obj[prev]
  }
}

const WorkMoreProjects = ({ currentProject }) => {
  const prev = findPrev(currentProject, projects)
  const next = findNext(currentProject, projects)

  return (
    <>
      <section className="more-projects">
        <Link
          to={next.url}
          className="more-projects__project more-projects__project--previous"
          style={{
            backgroundImage: `url(${next.images.main.src})`,
          }}
        >
          <span className="more-projects__project__title">{next.title}</span>
        </Link>

        <Link
          to={next.url}
          className="more-projects__project more-projects__project--next"
          style={{
            backgroundImage: `url(${prev.images.main.src})`,
          }}
        >
          <span className="more-projects__project__title">{prev.title}</span>
        </Link>
      </section>
    </>
  )
}

export default WorkMoreProjects
