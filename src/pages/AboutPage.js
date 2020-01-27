import React from "react"
import { Link, Image } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About me</h1>
    <p>I'm currently a web developer at Wayfair in Boston. I learned the fundamentals of Full Stack Web Development at the <a href="https://flatironschool.com/">Flatiron School</a> coding bootcamp in New York City.</p>
    <p>Before coding I worked in film production in Atlanta, GA, as a proud member of IATSE local 479. And before that I worked in freight forwarding in Japan, which was an amazing experience. I even got to open up a branch office in Kyoto and live in that beautiful city for a few years.</p>
    <p>Aside from coding my main passions in life are Muay Thai, jiu jitsu, my dog, and baking.</p>
    <img href="./images/gwyn.jpg/"/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
