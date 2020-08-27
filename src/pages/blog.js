import React, {useState} from 'react';
import { withPrefix } from 'gatsby';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Layout from "../components/layout";
import Upperbanner from "../components/Upperbanner";
import BottomBanner from "../components/BottomBanner";
import Toppost from "../components/Toppost";
import Doingbusiness from "../components/Doingbusineessection";
import Destinationdubai from "../components/Destinationdubai";
import Wordcloud from "../components/Wordcloud";
import Categories from "../components/Categories";
import newwatchright from "../../static/news-watch-right-banner.jpg"


// import { Link } from "gatsby"


// import Helmet from "react-helmet";

import Search from "../components/SearchContainer";

//import accordian

// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from 'react-accessible-accordion';



const BlOG_QUERY = gql`
query posts ($name :String!) {
  posts(where: {status: PUBLISH, name:$name}) {
        edges {
          node {
            title
            slug
            postId
            content
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
             node {
                name
             }
            }
            date
            categories {
                edges {
                  node {
                    name
                  }
                }
            }
          }
        }
      }
}
`;

// const Blog = ( {location} ) => {
//   const { loading, error, data } = useQuery(BlOG_QUERY);
  
//     console.log(location.state.postid)
// return(
//     <Layout>
   
      
//     </Layout>
//    ); 
// };

// export default Blog;
const Blog = () => {
   
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get('post')
    // console.log(location.state.slug);
    // var name=JSON.stringify(location.state.slug);
    const { data } = useQuery(BlOG_QUERY,{
        variables:{
            name:name
        }
    });
   

return(
    <Layout>
        {data && data.posts && data.posts.edges.map(({ node }) => 
        
        <section className="home-top-news-wrapper">
        <div className="container">
        <div className="news-txt">
          <div className="social-share">
            <p>Share</p>
            <ul>
              <li className="fb-share">
                <a href="javascript:void(0);">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li className="twitter-share">
                <a href="javascript:void(0);">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
              <li className="gmail-share">
                <a href="javascript:void(0);">
                  <i className="fa fa-paperclip" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="news-img">
              <img
                src={node.featuredImage.node.sourceUrl}
                alt={node.title}
              />
            </div>
            <h3>
              <div>
                <div>{node.title}</div>
              </div>
            </h3>
            <p />
            <div dangerouslySetInnerHTML={{ __html: `<div>${node.content}</div>` }}></div>
            <p />
          </div>
        </div>
      </div>
    </section>
  )}
    
    </Layout>
   ); 
};

export default Blog;
