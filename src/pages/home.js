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
import { Link,navigate} from 'gatsby';


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




// This query is executed at run time by Apollo.
const APOLLO_QUERY = gql`
{
    bannerimages {
      edges {
        node {
          featuredImage {
            node {
              uri
              link
              sourceUrl
            }
          }
        }
      }
    }
    currentevents:posts(where: {categoryName: "CURRENT EVENTS",status: PUBLISH}) {
      edges {
        node {
          title
          slug
          date
        }
      }
    }
    economydepartment:posts(where: {categoryName: "ECONOMONY DEPARTMENT",status: PUBLISH}) {
      edges {
        node {
          title
          slug
          date
          content
        }
      }
    }
    Newswatch: posts(last: 3, where: {orderby: {field: DATE, order: DESC}, onlySticky: false, categoryNotIn: "293", status: PUBLISH}) {
      edges {
        node {
          slug
          title
          date
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

const wpurl = `http://localhost:8000/posts/`;

const Posts = () => {

  //const[textvalue, setTextValue] = useState('');
  //const[exceptionvalue, setException] = useState('');
  //const[searchresults, setSearchresults] = useState([]);
  const { loading, error, data } = useQuery(APOLLO_QUERY);
  //const img = data && data.bannerimages && data.bannerimages.edges;
  // const posts = data && data.posts && data.posts.edges;
  // const events = data && data.all && data.all.edges;
  // const formshow = data && data.form && data.form.edges;
  const currentevents = data && data.currentevents && data.currentevents.edges;
  const economydepartment = data && data.economydepartment && data.economydepartment.edges;
  const newswatch = data && data.Newswatch && data.Newswatch.edges;

  function handleblog(slug){
       navigate(`/blog/?post=${slug}`, {state:{slug}})
   }

  if (loading) return <p>Loading Posts...</p>;
  if (error) return <p>{error}</p>;

    // function handleChange(e){
    //      setTextValue(e.target.value);
    // }
   
  //  function handleClick(){
  //       async function fetchUrl() {
  //         const response = await fetch("http://localhost/Allaboutvat/wp-json/wp/v2/posts?search="+textvalue, {
  //             method: "GET", // *GET, POST, PUT, DELETE, etc.
  //             mode: "cors", // no-cors, cors, *same-origin
  //             cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //             credentials: "omit", // include, *same-origin, omit
  //             headers: {
  //                 "Content-Type": "application/json",
  //             },
  //             redirect: "follow", // manual, *folslow, error
  //             referrer: "client", // no-referrer, *client
  //         });
  //         const json_search = await response.json().then(
            
  //           setException(response.status == 200 ? 'success' : 'error')
  //         );
  //         setSearchresults(json_search);
  //       }  
  //       fetchUrl();
  //   } 
    //console.log(searchresults);
return(
    <Layout>
    <Upperbanner/>
    {/* {img.map(({ node }) => <img src={node.featuredImage.node.sourceUrl} width="100%" height="200"></img> )} */}
      <Toppost/>
      <section className="subscribe-wrapper">
        <div className="container">
          <div className="left">
            <p>
              Subscribe to Dubai BizBuzz <span>Weekly News Updates</span>
            </p>
          </div>
          <div className="right">
            <form action className="subscribe">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <select name id="country">
                <option value="choose your country">Choose your Country</option>
                <option value="India">India</option>
                <option value="UAE">UAE</option>
              </select>
              <input type="submit" defaultValue="subscribe" className="submit-btn" />
            </form>
          </div>
        </div>
      </section>
      <section className="news-watch-wrapper">
        <div className="container">
          <h2 className="section-title">
            <span>News Watch</span>
          </h2>
          <div className="news-watch">
            <div className="curr-event">
              <h3>Current Events</h3>
              <ul>
              {currentevents.map(({ node }) => 
                <li>
                  <p className="date">{node.date}</p>
                  <a  onClick={() => handleblog(node.slug)} className="title">
                       {node.title}
                  </a>
              </li>
              )}
              </ul>
            </div>
           
            
            <div className="latest-news">
              <ul>
              {newswatch.map(({ node }) => 
                <li>
                <p className="date">{node.date}</p>
                <div className="details">
                  <div className="left">
                    { <img src={node.featuredImage.node.sourceUrl} alt={node.title} /> }
                    <p className="title">
                       {node.title}
                    </p>
                    <p>
                    <div dangerouslySetInnerHTML={{ __html: `${node.content} `}}></div>
                      
                    </p>
                  </div>
                </div>
              </li>
          
              )}
          </ul>
            </div>
            <Categories/>
            {/* <div className="economy-wrap">
              <h3>ECONOMONY DEPARTMENT</h3>
              <ul>
                <li>
                  <p className="date">12 July '20</p>
                  <a href="javascript:void(0);" className="title">
                    Dubai Economy hosts online workshops for DQA and DHDA applicants
                  </a>
                </li>
                <li>
                  <p className="date">12 July '20</p>
                  <a href="javascript:void(0);" className="title">
                    More than 80 startups participate in DP World 'Manasah', says
                    Dubai Economy
                  </a>
                </li>
                <li>
                  <p className="date">12 July '20</p>
                  <a href="javascript:void(0);" className="title">
                    Dubai Economy highlights legal protection and legislative
                    solutions for businesses distressed due to COVID-19
                  </a>
                </li>
              </ul>
            </div>
            <div className="labpur-wrap">
              <h3>Immigration / Labour</h3>
              <ul>
                <li>
                  <p className="date">12 July '20</p>
                  <a href="javascript:void(0);" className="title">
                    Cost and process explained as Dubai tourist and visit visas open
                  </a>
                </li>
                <li>
                  <p className="date">12 July '20</p>
                  <a href="javascript:void(0);" className="title">
                    Coronavirus: No exceptions for expired residency visas, UAE
                    immigration service says
                  </a>
                </li>
                <li>
                  <p className="date">12 July '20</p>
                  <a href="javascript:void(0);" className="title">
                    Expired UAE residence visa – follow this process if you wish to
                    exit the country
                  </a>
                </li>
              </ul>
            </div> */}
            <div className="news-watch-banner">
              <img
                src={newwatchright}
                alt="Opening a new business in UAE?"
              />
            </div>
          </div>
        </div>
</section>

      <Doingbusiness/>
      <BottomBanner/>
      
      <Destinationdubai/>
      <Wordcloud/>
      <section className="btm-note-wrapper">
          <div className="container">
            <p>
                <span>COPYRIGHT &amp; DISCLAIMER:</span> The Dubai BizBuzz is a blog
                curated by the 3S Group as part of their responsibility for promoting
                Dubai as a global business destination. The 3S Group .........dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
             </p>
          </div>
      </section>
      {/* <Accordion allowZeroExpanded>
            {newswatch.map(({ node })  => 
              <div class="col-md-8">
                <AccordionItem key={node.postId}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                          <div dangerouslySetInnerHTML={{ __html: `${node.title}` }}></div>
                          <img src="https://wd.emqubeweb.com/pub/media/logo/stores/1/william-doshi-logo.png"/>
                          <span>{node.title}</span>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                       <div dangerouslySetInnerHTML={{ __html: `${node.content}` }}></div>
                    </AccordionItemPanel>
                </AccordionItem>
              </div>
                
            )}
          </Accordion> */}
      
 {/* {currentevents.map(({ node }) => <div class="title-news" dangerouslySetInnerHTML={{ __html: `<a href="${wpurl}${node.slug}">${node.title}</a>` }}></div>)} */}
       
       
       {/* {events.map(({ node }) => <div class="col-md-2" dangerouslySetInnerHTML={{ __html: `<div ${node.postId}> ${node.title} </div><div>${node.content}</div>` }}></div>)} */}
      
    </Layout>
   ); 
};

export default Posts;
