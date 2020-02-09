module.exports = {
  siteMetadata: {
    title: `Alessandro Allegranzi`,
    description: `I am a Boston based full stack web developer`,
    author: `Alessandro Allegranzi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#5495b8`,
        theme_color: `#5495b8`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
  ],
}
