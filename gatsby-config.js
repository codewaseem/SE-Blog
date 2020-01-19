/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "The Software Engineering Blog",
    description:
      "In this blog you will find posts on topics like software engineering, algorithms, data structures, programming languages, blockchian, artificial intelligence, web development, etc",
  },

  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-layout`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
  ],
}
