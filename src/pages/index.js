
import React, {useState} from 'react';
import { withPrefix } from 'gatsby';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Layout from "../components/layout";






import Search from "../components/SearchContainer";


const Index = () => {

return(
    <Layout>
      <h1>Welcome</h1>
      
    </Layout>
   ); 
};

export default Index;