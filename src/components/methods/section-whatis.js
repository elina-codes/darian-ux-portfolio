/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const MethodSectionWhatIs = ({ title, img, children }) => {
  return (
    <>
      <section>
        <div className="grid wrapper">
          <div className="grid__item work__text">
            <h2>{title}</h2>

            {children}
          </div>
          <div className="grid__item grid__image">
            <img
              src={img.images.main[Object.keys(img.images.main)[0]]}
              alt="Two similar highligher caps, side by side, positioned in the same way, but one is pink and the other is yellow."
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default MethodSectionWhatIs
