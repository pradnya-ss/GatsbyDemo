import React from "react"; 

import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const BOTTOM = gql`
{
  bannerimages(where: {search: "Bottom", orderby: {field: MODIFIED, order: DESC}, status: PUBLISH}, last: 1) {
    edges {
      node {
        title
        banners {
          desktop {
            sourceUrl
          }
          position
        }
      }
    }
  }
}
`;
const BottomBanner = () => {
  const { data :bottombanners } = useQuery(BOTTOM);
  //const upban = topbanners && topbanners.bannerimages && topbanners.bannerimages.edges;
  
   //return (<h1>Shreyas</h1>);
   return ( 
    <div class="new-bussi-wrap">
      {bottombanners && bottombanners.bannerimages && bottombanners.bannerimages.edges.map(({node}) =>
         <img src={node.banners.desktop.sourceUrl} alt={node.title} classname="desktop"></img> 
      )}
      
       {/* <img src={mobile} alt="Expo2020 Dubai UAE Banner" classname="mobile"></img> */}
     </div> 
    );  
};
export default BottomBanner;