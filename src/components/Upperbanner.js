import React from "react"; 

import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const TOP = gql`
{
  bannerimages(where: {search: "Top", orderby: {field: MODIFIED, order: DESC}, status: PUBLISH}, last: 1) {
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
const Upperbanner = () => {
  const { data :topbanners } = useQuery(TOP);
  //const upban = topbanners && topbanners.bannerimages && topbanners.bannerimages.edges;
  
  const wpurl = `http://localhost:8000/`;
   //return (<h1>Shreyas</h1>);
   return ( 
    <section class="top-banner-wrapper">
      {topbanners && topbanners.bannerimages && topbanners.bannerimages.edges.map(({node}) =>
         <img src={node.banners.desktop.sourceUrl} alt={node.title} className="desktop"></img> 
      )}
       
       {/* <img src={mobile} alt="Expo2020 Dubai UAE Banner" classname="mobile"></img>  */}
       {/* <img src="https://wd.emqubeweb.com/pub/media/logo/stores/1/william-doshi-logo.png" alt="Expo2020 Dubai UAE Banner" className="mobile"></img> */}
       
     </section> 
    );
};
export default Upperbanner;