/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [

    {
      resolve:'gatsby-source-graphql',
      options:{
        typeName:'WPGraphql',
        fieldName:'wpgraphql',
        url:'https://dbb.emqubeweb.com/graphql',
      } 
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    // `gatsby-env-variables`
  ],
}
