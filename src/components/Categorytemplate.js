import React, { Component } from "react"

import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { Link,navigate} from 'gatsby';

const APOLLO_QUERY = gql`

query posts($categoryid:Int!)
{
    posts(where: {categoryId: $categoryid}) {
        edges {
          node {
            id
            title
            date
            slug
            categories {
              edges {
                node {
                  name
                  categoryId
                }
              }
            }
          }
        }
      }
}
`;

const Categorytemplate = ( categoryid ) => {
    var category_name=[];
    const { data: category } = useQuery(APOLLO_QUERY,{
        variables:categoryid
    });
    
    category && category.posts && category.posts.edges.map(({ node }) =>  
        category_name.push(node.categories.edges[0].node.name)
    )
    category_name = category_name.filter(function(item, pos) {
      return category_name.indexOf(item) == pos;
   })
    // console.log("----------------------props=-----------------------");
    // console.log(categoryid);
    // console.log(category);
    // console.log(category_name);
    // console.log("----------------------props=-----------------------");
    
//   const { loading, error, data } = useQuery(APOLLO_QUERY);
//   const menus = data && data.menuItems && data.menuItems.edges;
  
   //return (<h1>Shreyas</h1>);
   function handleblog(slug){
    navigate(`/blog/?post=${slug}`, {state:{slug}})
   }
   return ( 
    
   
    <div>
        <h3>{category_name}</h3>
            <ul>
            {category && category.posts && category.posts.edges.map(({ node }) =>  
            
            <li>
            <p classname="date">{node.date}</p>
            <a href="javascript:void(0);" onClick={() => handleblog(node.slug)}  classname="title">
                          {node.title} 
            </a>
            </li>
            
            )}

            </ul>    
    
    </div>    

   
    );
};


export default Categorytemplate;
