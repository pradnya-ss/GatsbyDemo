import React, { Component } from "react"
import logo from "../../static/dubai-bizbuzz-logo.png"

import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const APOLLO_QUERY = gql`
{
  menuItems {
    edges {
      node {
        label
        id
        url
        path
      }
    }
  } 
}
`;
const MainMenu = () => {
  const { loading, error, data } = useQuery(APOLLO_QUERY);
  const menus = data && data.menuItems && data.menuItems.edges;
  
  const wpurl = `http://localhost:8000/`;
   //return (<h1>Shreyas</h1>);
   return ( 
<div>
  <header>
  <div className="container">
    <h1 className="site-title">
      <a href="/home">
        <img src={logo} alt="Dubai Bizbuzz Logo" />
      </a>
    </h1>
    <div className="right-nav">
      <div className="mobile-menu-icon">
        <a href="#" className="menu-toggle">
          <span />
          <span />
          <span />
          <span />
        </a>
      </div>
      <ul className="nav">
      
      {data && data.menuItems && data.menuItems.edges.map(({node}) =>
          <li><a href="/headline">{node.label}</a></li>
      )}
      
        {/* <li>
          <a href="headlines.html">Headlines</a>
        </li>
        <li>
          <a href="javascript:void(0);">Doing Business</a>
        </li>
        <li>
          <a href="javascript:void(0);">Destination Dubai</a>
        </li>
        <li>
          <a href="javascript:void(0);">Useful LInks</a>
        </li> */}
      </ul>
      <div className="toggle-search">
        <form
          role="search"
          method="get"
          className="search-form"
          name="search-form"
          id="search-form"
          action
        >
          <label>
            <input
              type="search"
              className="search-field"
              value=""
              name=""
            />
          </label>
          <span className="search-icon" />
          <input type="submit" value="Search" class="search-btn"></input>
        </form>
      </div>
    </div>
  </div>
</header>

<div className="toggle-search mobile">
  <form
    role="search"
    method="get"
    className="search-form"
    name="search-form"
    id="search-form"
    action
  >
    <label>
      <input type="search" className="search-field" defaultValue name="s" />
    </label>
    <span className="search-icon" />
    <input type="submit" defaultValue="Search" className="search-btn" />
  </form>
</div>      
</div>   
    );
};


export default MainMenu;
