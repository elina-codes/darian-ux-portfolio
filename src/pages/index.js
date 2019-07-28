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
      <div className="wrapper coming-soon">
        <h1 className="section__title">Coming soon!</h1>
      </div>
    </section>
  </Layout>
)

export default IndexPage
