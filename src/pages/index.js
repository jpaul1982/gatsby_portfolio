import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my portfolio site!</h1>
    <p>This is a site for sharing my devleopment projects.</p>
    <p>Take a look, be impressed, and call me to set up an interview!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2">Go to page 2</Link>
  </Layout>
)

export default IndexPage
