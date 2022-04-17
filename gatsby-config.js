/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Marcus Hägerstrand`,
    description: `A creative UI Designer and developer student with a passion for simplistic design, animation, problem-solving, and for mastering the latest front-end technologies.`,
    author: `Marcus Hägerstrand <marcus.hagerstrand@gmail.com>`,
    keywords: `developer, ui designer, ux designer, gothenburg, marcus hägerstrand`,
    image: `src/assets/images/banner.webp`,
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-netlify`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `home`,
        path: `${__dirname}/content/home`,
      },
    },
  ],
}
