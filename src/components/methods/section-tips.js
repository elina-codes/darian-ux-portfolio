import React from "react"

const MethodSectionTips = ({ title, method, children }) => {
  return (
    <>
      <section className="method__tips">
        <div className="grid wrapper">
          <div className="grid__item grid__image">
            <h2>{title}</h2>
            {children}
          </div>
          <div className="grid__item work__text">
            <img src={method.images.tips[Object.keys(method.images.tips)[0]]} alt="Two handheld gaming devices, side by side, positioned in the same way, but one is pink and the other is black." />
          </div>
        </div>
      </section>
    </>
  )
}

export default MethodSectionTips
