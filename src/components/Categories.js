import React, { Component, useState} from "react"
import logo from "../../static/dubai-bizbuzz-logo.png"
import { useQuery ,useMutation  } from '@apollo/client';
import Categorytemplate from "../components/Categorytemplate";
import gql from 'graphql-tag';


const APOLLO_QUERY = gql`
{
    categories(first: 3) {
        edges {
          node {
            name
            categoryId
          }
        }
      }
}
`;
const EXCLUDE_CATEGORY = gql`
    mutation  posts ($categoryIn :ID!) {
        posts(where:{categoryIn: $categoryIn}) {
          edges {
            node {
              slug
              title
            }
          }
        }
    }
`;
// const EXCLUDE_CATEGORY = gql`
//     query posts ($categoryIn :String!) {
//         posts(where: {categoryIn: $categoryIn}) {
//           edges {
//             node {
//               slug
//               title
//             }
//           }
//         }
//     }
// `;
const Categories = () => {

    const unwwantedid = [];
    
    const { data: category } = useQuery(APOLLO_QUERY);
    //const [ids, setCategoryId] = useState('');
    
    // console.log(category);
    const categories = category && category.categories && category.categories.edges;
    console.log("------------------------------");
    //console.log(category && category.categories && category.categories.edges);
    category && category.categories && category.categories.edges.map(({ node }) => {
      if(node.name!='CURRENT EVENTS'){
          if(node.name!='Uncategorized'){
            unwwantedid.push(node.categoryId)
          }
        
      }
    });
    
   return ( 
    
    <div className="economy-wrap">
     {/* <Categorytemplate name="219"/>    */}
  
        {unwwantedid.map(item  => {
        //    console.log(item);
             return <Categorytemplate categoryid={item}/>   
                
        })}
    
    </div>

    );
};


export default Categories;
