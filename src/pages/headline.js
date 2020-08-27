import React, {useState} from "react"
import logo from "../../static/dubai-bizbuzz-logo.png"

import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Layout from "../components/layout";
import Filterresult from "../components/Filterresult";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const APOLLO_QUERY = gql`
{
    categories {
        edges {
          node {
            name
            categoryId
          }
        }
      }
}
`;
// const POST_FILTER = gql`
//     query posts ($filtervalue :Int!) {
//         posts(where:{categoryId: $filtervalue}) {
//           edges {
//             node {
//               slug
//               title
//             }
//           }
//         }
//     }
// `;
const POST_FILTER = gql`
    query posts ($filtervalue :Int!,$last:Int!) {
        posts(where:{categoryId: $filtervalue}) {
          edges {
            node {
              slug
              title
            }
          }
        }
    }
`;
const Headline = (filtervalue) => {
    var [filtervalue, setFilter] = useState('0');
    
    const { data: search } = useQuery(APOLLO_QUERY);
   // if(filtervalue!=''){
       
    //}
    function handleClick(id){
       
        setFilter(id);
    }
    
  //   function handleClickLodmore(){
  //     lasted=last+2;
  //     setLast(lasted);
  // }
    // console.log("---------------------filter value");
    // console.log(filtervalue);
    // console.log("++++++++++++++++++++++");
    // console.log(posts);
    // console.log("++++++++++++++++++++++");
    // console.log("---------------------filter value");
   return ( 
    <Layout>
   
    <div className="news-filter">
    <div className="container">
      <h2 className="page-title">Headlines</h2>
      <div className="filter-wraper">
        <ul>
        <li className={filtervalue=='0'?"active":'' 
          } >
            <a href="javascript:void((0);" onClick={() => handleClick('0')}>ALL</a>
          </li>
        {search && search.categories && search.categories.edges .map(({ node }) => 
          <li className={filtervalue==node.categoryId?"active":'' 
          }>
            <a href="javascript:void((0);" data-key={node.categoryId} onClick={() => handleClick(node.categoryId)}>{node.name}</a>
          </li>
        )}
        </ul>
        <div className="month-filter">
          <select name="month" id="month">
            <option value="3 month">Last 3 months</option>
            <option value="6 month">Last 6 months</option>
            <option value="9 month">Last 9 months</option>
            <option value="12 month">Last 12 months</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  
   <Filterresult categoryid={filtervalue} />
  </Layout>
    );
};


export default Headline;
