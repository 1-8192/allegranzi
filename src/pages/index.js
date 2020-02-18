import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Alessandro Allegranzi" />
    <h1>Hi there, I'm Ale!</h1>
    <p>I am a full stack web developer with experience in PHP, Ruby, Javascript, and React. Currently based in Boston, I love to build apps that solve problems when I'm not baking or practicing Muay Thai.</p>
    <ul>
      <li><a href="https://www.linkedin.com/in/allegranzi/">LinkedIn</a></li>
      <li><a href="https://github.com/1-8192">Github</a></li>
    </ul>
    <h3>Blog Posts</h3>
    <ul>
      <Link to="./blog/ruby_merge_sort">Ruby Merge Sort</Link>
    </ul>
  </Layout>
)

export default IndexPage
