import React from "react"; 
import destination1 from "../../static/destination-dubai-img-1.jpg"
import destination2 from "../../static/destination-dubai-img-2.jpg"
import destination3 from "../../static/destination-dubai-img-3.jpg"
import destination4 from "../../static/destination-dubai-img-4.jpg"
import destination5 from "../../static/destination-dubai-img-5.jpg"
import destination6 from "../../static/destination-dubai-img-1.jpg"
var createReactClass = require('create-react-class');

const Destinationdubai = createReactClass({
  render: function() {
    return (
        <section className="destination-dubai-wrapper">
        <div className="container">
          <h2 className="section-title">
            <span>Destination Dubai</span>
          </h2>
          <ul className="desti-list">
            <li>
              <a href="javascript:void(0);">
                <h3>Economic Indicators</h3>
                <img
                  src={destination1}
                  alt="Economic Indicators"
                />
                <p>
                  Dubai's economy is experiencing both risks and encouraging signs of
                  recovery.
                </p>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <h3>Initiatives</h3>{" "}
                <img src={destination2} alt="Initiatives" />
                <p>Dubai South Stimulus Package Extended to End of 2020</p>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <h3>Economic Indicators</h3>
                <img
                  src={destination3}
                  alt="Economic Indicators"
                />
                <p>Why Dubai’s Infrastructure is Right for Your Business</p>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <h3>Economic Indicators</h3>
                <img
                  src={destination4}
                  alt="Economic Indicators"
                />
                <p>
                  The world's most cosmopolitan talent pool resides in Dubai next only
                  to major metropolises in the world.
                </p>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <h3>Economic Indicators</h3>
                <img
                  src={destination5}
                  alt="Economic Indicators"
                />
                <p>
                  Everything you need to know about living in Dubai is encapsulated
                  for you in this wonderful guide by Expat Arrivals.
                </p>
              </a>
            </li>
          </ul>
        </div>
      </section>
      
    );
  }
});
export default Destinationdubai;