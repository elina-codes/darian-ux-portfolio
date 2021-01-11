/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const YoutubeIFrame = ({ url, title }) => {
  return (
    <div className="video-container">
      <iframe
          title={title}
          width="890"
          height="500"
          src={url}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
      ></iframe>
    </div>
  )
}

export default YoutubeIFrame
