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
        url:'http://15.207.185.188/graphql',
      } 
    },
    `gatsby-plugin-styled-components`,
    // `gatsby-env-variables`
  ],
}
