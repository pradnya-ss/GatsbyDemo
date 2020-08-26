import React, { Component } from "react"

import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';

const ALL = gql`

{
    posts {
        edges {
          node {
            postId
            title
            date
            content
            categories {
              edges {
                node {
                  name
                  categoryId
                }
              }
            }
            featuredImage {
                node {
                  sourceUrl
                }
              }
          }
        }
      }
}
`;
const BlogComponent = (state)=> {
  
     console.log(state)
     console.log("BLog COmponent");
    const { loading, data: allposts } = useQuery(ALL);
    if (loading) return <p>Loading Posts...</p>;
   return ( 
      <h1>Shreyas</h1>
    );
};


export default BlogComponent;
