import React, { Component,useState} from "react"

import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';


const APOLLO_QUERY = gql`

  query posts($searchcatid:Int!,$last:Int!)
  {
      posts(where: {categoryId: $searchcatid},last: $last) {
          edges {
            node {
              id
              title
              date
              content
              categories {
                edges {
                  node {
                    name
                    categoryId
                  }
                }
              }
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
const Specificcategoryresult = ({searchcatid,last}) => {
  
    var [last, setLast] = useState(1);
    const { loading, data: specificposts } = useQuery(APOLLO_QUERY,{
        variables:{
           searchcatid:searchcatid,  
           last:last
          }
    });


    function handleClickLodmore(){
      var lasted=parseInt(last)+parseInt(2);
      setLast(lasted);
    }
    
    if (loading) return <p>Loading Posts...</p>;
   return ( 

    
    <section className="news-list-wrapper">
        <div className="container">
        <div className="left">
            {/* news accordion starts */}
            <Accordion allowZeroExpanded>
            {specificposts && specificposts.posts && specificposts.posts.edges.map(({ node })  => 
              <div class="col-md-8">
                <AccordionItem key={node.postId}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        <img src={node.featuredImage.node.sourceUrl}/>
                         <span class="news-cat">{node.categories.edges[0].node.name}</span>
                         <div>{node.title}</div>
                         <span class="date">{node.date}</span>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    <div class="social-share">
                        <p>Share</p>
                        <ul>
                          <li class="fb-share"><a href="javascript:void(0);"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                          <li class="twitter-share"><a href="javascript:void(0);"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                          <li class="gmail-share"><a href="javascript:void(0);"><i class="fa fa-paperclip" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                       <div dangerouslySetInnerHTML={{ __html: `${node.content}` }}></div>
                       <div className="exter-link">
                        <p className="left">
                        Also Read{" "}
                        <a href="javascript:void(0);">
                            Taqa's stock run takes a pause, but it still leads on
                            market cap
                        </a>
                        </p>
                        <p className="right">
                        <a href="javascript:void(0);" target="_blank">
                            News Source{" "}
                            <i className="fa fa-link" aria-hidden="true" />
                        </a>
                        </p>
                    </div>
                    </AccordionItemPanel>
                </AccordionItem>
              </div>
                
            )}
          </Accordion>

            {/* news accordion ends */}
            <div className="btm-btn">
            <a href="javascript:void(0);" className="load-more" onClick={() => handleClickLodmore()} >
                Load More Headlines
            </a>
            <a href="javascript:void(0);" className="top-btn">
                Go Back To Top
            </a>
            </div>
        </div>
        <div className="right">
            <img
            src="images/news-watch-right-banner.jpg"
            alt="Opening a New Business in UAE?"
            />
            <section className="subscribe-wrapper vertical">
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
                    <input
                    type="submit"
                    defaultValue="subscribe"
                    className="submit-btn"
                    />
                </form>
                </div>
            </div>
            </section>
        </div>
        </div>
  </section>
   
   
    );
};


export default Specificcategoryresult;
