import React, {useState,useEffect} from "react"
import logo from "../../static/dubai-bizbuzz-logo.png"

import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Layout from "../components/layout";
import Filterresult from "../components/Filterresult";
import { useQueryParam } from "gatsby-query-params";
import $ from "jquery";
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

    var panel = useQueryParam("panel", "");
    console.log('**********************************************');
    console.log(panel);
    console.log('**********************************************');
    
    var [filtervalue, setFilter] = useState('0');
    
    const { data: search } = useQuery(APOLLO_QUERY);
   // if(filtervalue!=''){
       
    //}
    function handleClick(id){
       
        setFilter(id);
    }

    useEffect(() => {
        // for headline page - filter section
          $('a.filter-tag').click(function(e){
          // e.preventDefault();
          $('.filter-li').slideToggle();
          $('.filter-li').toggleClass('show');
        });
        // $('.filter-li li').click(function(e){
        //   // e.preventDefault();
        //   $('.filter-li').removeClass('show');
        //   $('.filter-li').hide('');
        // });
     })
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
        <li className="filter-txt">
           <a className="filter-tag"> 
            Filter By:
            </a>
        <ul className="filter-li">
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
        </li>
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
  
   <Filterresult categoryid={filtervalue}  panel={panel} />
  </Layout>
    );
};


export default Headline;
