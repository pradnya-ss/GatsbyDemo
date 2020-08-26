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
import Allfilterresult from "../components/Allfilterresult";
import Specificcategoryresult from "../components/Specificcategoryresult";



const Filterresult = ({ categoryid }) => {
  
    console.log(categoryid+"dadsasasasasasasasasasasasasasasasa");
        // const { data: posts } = useQuery(APOLLO_QUERY,{
        //     variables:categoryid
        // });
      
//   const { loading, error, data } = useQuery(APOLLO_QUERY);
//   const menus = data && data.menuItems && data.menuItems.edges;
  
   //return (<h1>Shreyas</h1>);
   return ( 
       
      categoryid=='0'?<Allfilterresult/>:<Specificcategoryresult searchcatid={categoryid}/>
        
    );
};
export default Filterresult;
