// const { useQuery } = require('@apollo/client')
// const { gql } = require('apollo-boost')

// const APOLLO_QUERY = gql`
// {
//   wpgraphql {
//     pages {
//       nodes {
//         id
//         uri
//       }
//     }
//     posts {
//       nodes {
//         id
//         uri
//         slug
//       }
//     }
//   }
// }
//`;
exports.createPages= async({ actions,graphql}) =>{
  // import { useQuery } from '@apollo/client';
  // import gql from 'graphql-tag';

  const result = await graphql(`
  {
    wpgraphql {
      pages {
        nodes {
          id
          uri
        }
      }
      posts {
        nodes {
          id
          uri
          slug
        }
      }
    }
  }
  `);
 
  // const { loading, error, data } = useQuery(APOLLO_QUERY);
  const pages = result.data.wpgraphql.pages.nodes
  // const pages = data.wpgraphql.pages.nodes
  // console.log(pages);
  pages.forEach(page => {
    actions.createPage({
      path: page.uri,
      component:require.resolve('./src/templates/page.js'),
      context:{
        id:page.id,
      }
    })
  })
  const posts = result.data.wpgraphql.posts.nodes

  // const posts = data.wpgraphql.posts.nodes
  posts.forEach(post => {
    actions.createPage({
      path: `posts/${post.slug}`,
      component:require.resolve('./src/templates/post.js'),
      context:{
        id:post.id,
      }
    })
  })
  
}
