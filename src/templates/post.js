import React from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layout"

// import { useQuery } from '@apollo/client';
// import gql from 'graphql-tag';
//import Layout from "../components/layout";

// export default ({pageContext})=>(
//     <Layout>
//        <h1 dangerouslySetInnerHTML={{__html:pageContext.title}}/>
//            <div dangerouslySetInnerHTML={{__html:pageContext.content}}/>
//     </Layout>
// )

// export const APOLLO_QUERY = gql`
//   query MyQuery($id:ID!){
       
//         post(id: $id){
//             title
//             content
//         }
        
//     }
// `;
export const query=graphql`
query ($id:ID!){
    wpgraphql{
        post(id: $id){
            title
            content
        }
    }
 }
`
const Post=({ data }) =>{
//  const { loading, error, data } = useQuery(APOLLO_QUERY,{
//     variables: { id },
//  });
 console.log(data);
 const post=data.wpgraphql.post;
 //const post=data.post;
return <>
<Layout> 
    <h1 dangerouslySetInnerHTML={{__html:post.title}}/>
    <div dangerouslySetInnerHTML={{__html:post.content}}/>
    </Layout> 
</>
}
export default Post;