import React from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layout"
//import Layout from "../components/layout";

// export default ({pageContext})=>(
//     <Layout>
//        <h1 dangerouslySetInnerHTML={{__html:pageContext.title}}/>
//            <div dangerouslySetInnerHTML={{__html:pageContext.content}}/>
//     </Layout>
// )
export const query=graphql`
query ($id:ID!){
    wpgraphql{
        page(id: $id){
            title
            content
        }
    }
 }
`
const Page=({ data }) =>{
     const page=data.wpgraphql.page;
return <>
<Layout> 
    <h1 dangerouslySetInnerHTML={{__html:page.title}}/>
    <div dangerouslySetInnerHTML={{__html:page.content}}/>
    </Layout> 
</>
}
export default Page;