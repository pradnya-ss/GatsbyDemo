import React from "react"; 
import homepagecloud from "../../static/home-page-coud-links.jpg";

var createReactClass = require('create-react-class');

const Wordcloud = createReactClass({
  render: function() {
    return (
        <section className="cloud-link-wrapper">
        <div className="container">
          <img src={homepagecloud} alt />
        </div>
      </section>
      
    );
  }
});
export default Wordcloud;