import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import water from "../images/water.jpeg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      class="background-image"
      style={{ backgroundImage: `url(${water})` }}
    ></div>
    <section class="main">
      <h1>Welcome to my portfolio site!</h1>
      <p>This is a site for sharing my devleopment projects.</p>
      <p>Take a look, be impressed, and call me to set up an interview!</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    </section>

  </Layout>
)

export default IndexPage
