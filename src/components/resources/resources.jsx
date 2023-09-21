import "./resources.css"
import resource1 from "../../assets/images/resource-1.svg"
import resource2 from "../../assets/images/resource-2.svg"

function Resources() {
  return <section id="resources">
    <div className="container">
      <div className="resources-section">
        <div className="resources-title">
          <h2>Articles & resources</h2>
          <div>
          <button class="header-btn">Get a free quote</button>
          <button class="about-btn">Explore services</button>
          </div>
        </div>
        <div className="resources-content">
          <div className="resource-cart">
            <img src={resource1} alt="" />
            <div>
              <h4>8 best vacuum cleaners to clean any mess for your home in 2022</h4>
              <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
              <h5>Jan 28, 2022</h5>
            </div>
          </div>
          <div className="resource-cart">
            <img src={resource2} alt="" />
            <div>
              <h4>8 best vacuum cleaners to clean any mess for your home in 2022</h4>
              <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
              <h5>Jan 28, 2022</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}


export default Resources