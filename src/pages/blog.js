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


import Helmet from "react-helmet";

import Search from "../components/SearchContainer";

//import accordian

// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from 'react-accessible-accordion';




// This query is executed at run time by Apollo.
// const BlOG_QUERY = gql`
// {
//   posts(where: {name: ""}) {
//     edges {
//       node {
//         id
//         title
//         slug
//         categories {
//           edges {
//             node {
//               name
//             }
//           }
//         }
//         content
//         date
//       }
//     }
//   }
// }
// `;

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

return(
    <Layout>
   
      
    </Layout>
   ); 
};

export default Blog;