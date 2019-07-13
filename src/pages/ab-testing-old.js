import React from "react"
import { Link } from "gatsby"

import MethodLayout from "../components/methods/layout-method"

import SEO from "../components/seo"

const ABTesting = () => (
  <MethodLayout pageTitle="A/B Testing">
    <SEO title="A/B Testing" />
    <Link to="/">Go to page 2</Link>
  </MethodLayout>
)

export default ABTesting
