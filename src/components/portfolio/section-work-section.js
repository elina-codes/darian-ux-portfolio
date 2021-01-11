/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import YoutubeIFrame from "./youtube-iframe"

const WorkSection = ({
  title,
  subtitle,
  image = null,
  alt = null,
  image2 = null,
  alt2 = null,
  image3 = null,
  alt3 = null,
  video,
  video2,
  video3,
  children,
}) => {
  let videoElement = ""
  if (video) {
    videoElement = <YoutubeIFrame url={video} title={title} />
  }
  let videoElement2 = ""
  if (video2) {
    videoElement2 = <YoutubeIFrame url={video2} title={title} />
  }
  let videoElement3 = ""
  if (video3) {
    videoElement3 = <YoutubeIFrame url={video3} title={title} />
  }

  return (
    <section>
      <div className="grid wrapper">
        <div className="grid__item work__text">
          <h4 className="work__subtitle">{subtitle}</h4>
          <h3 className="work__title">{title}</h3>
          {children}
        </div>
        <div className="grid__item grid__image">
          <img src={image} alt={alt} data-in-view />
          <img src={image2} alt={alt2} data-in-view />
          <img src={image3} alt={alt3} data-in-view />
          {videoElement}
          {videoElement2}
          {videoElement3}
        </div>
      </div>
    </section>
  )
}

export default WorkSection
