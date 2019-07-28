import React from "react"
// import { Link } from "gatsby"

import uxMethods from "../data/ux-methods"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridLayout from "../components/grid_layout"

const IndexPage = () => (
  <Layout>
    <SEO title="UX Methods" />
    <section>
      <div className="wrapper">
        <h1 className="section__title">UX It All</h1>
        <p className="section__description">
          Below is a list of several UX methods that UX Designers can use in
          their strategy. Over the next several months, I am going to be adding
          more and more. Please send me a message if you have any feedback or
          wish to see others added sooner.
        </p>
        <GridLayout gridItems={uxMethods} />
      </div>
    </section>
  </Layout>
)

export default IndexPage
