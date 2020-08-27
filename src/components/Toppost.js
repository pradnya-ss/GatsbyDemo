import React, { Component,useState } from "react"
import logo from "../../static/dubai-bizbuzz-logo.png"
import { Link,navigate} from 'gatsby';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
const APOLLO_QUERY = gql`
{
    posts(where: {onlySticky: true, orderby: {field: MODIFIED, order: DESC},status: PUBLISH}, last: 1) {
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
          }
        }
      }
}
`;
const Toppost = () => {

  //var [postvalue, setPostValue] = useState('');

   function handleblog(slug){
       navigate(`/blog/?post=${slug}`, {state:{slug}})
   }

  const { loading, error, data } = useQuery(APOLLO_QUERY);
  //const posts = data && data.posts && data.posts.edges;
  const wpurl = `http://localhost:8000/`;

 // if (postvalue!=''){
    
  //   return (<Redirect to={{
      
  //     pathname: '/blog',
  //     state: {postvalue}
  // }} />)
 // }

   //return (<h1>Shreyas</h1>);
   return ( 
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
            <li class="gmail-share">
              <a href="javascript:void(0);">
                <i class="fa fa-paperclip" aria-hidden="true"></i>
              </a>
             </li>
          </ul>
        </div>
        {data && data.posts && data.posts.edges.map(({ node }) => 
         <div>
         <div className="news-img">
           <img
             src={node.featuredImage.node.sourceUrl}
             alt="Abu Dhabi's Taqa is the UAE stock market champ"
           />
         </div>
         <h3>
         <div dangerouslySetInnerHTML={{ __html: `<div>${node.title}</div>` }}></div>
           
         </h3>
         <p>
         <div dangerouslySetInnerHTML={{ __html: `<div>${node.content}</div>` }}></div>
           
         </p>
         {/* {<Link
          to={`/blog/?post=${node.slug}`}
          >Read More</Link> } */}
           <a onClick={() => handleblog(node.slug)} >Read More</a> 
       </div>
        )}
      </div>
    </div>
  </section>
  
    );
};


export default Toppost;
