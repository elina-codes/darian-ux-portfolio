import React from "react"

const MethodSectionSteps = ({ title, method, children }) => {
  return (
    <>
      <section className="method__steps">
        <div className="wrapper">
          <h2>{title}</h2>
          <img src={method.images.steps[Object.keys(method.images.steps)[0]]} alt="Writing down notes in between two laptops displaying two different screens." />
          {children}
        </div>
      </section>
    </>
  )
}

export default MethodSectionSteps
