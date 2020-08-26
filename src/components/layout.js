import React from "react"
import { StaticQuery, graphql } from "gatsby"
import MainMenu from "./MainMenu";
import Header from "./Header";
import Footer from "./Footer";
import Helmet from "react-helmet";


const Layout = ({children}) =>(
  <div class="container-fluid">
    {/* <Header/> */}
      <MainMenu/>
      {children}
  
     <Footer/>
    </div>
)
export default Layout;