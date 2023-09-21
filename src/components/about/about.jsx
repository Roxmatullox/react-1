import "./about.css"
import date from "../../assets/images/date.svg"
import card from "../../assets/images/card.svg"
import cleans from "../../assets/images/cleans.svg"


function About() {
  return <section id="about">
    <div className="container">
      <div className="about-section">
        <div className="about-title">
          <h2>About us</h2>
          <p>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <div className="about-card">
              <img src={date} alt="" />
              <h5>1. Schedule online</h5>
              <p>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
            </div>
            <div className="about-card">
              <img src={card} alt="" />
              <h5>2. Pay online easily</h5>
              <p>Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
            </div>
            <div className="about-card">
              <img src={cleans} alt="" />
              <h5>3. Get your house cleaned</h5>
              <p>Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
            </div>
          </div>
          <div className="about-btns">
            <button class="header-btn">Get a free quote</button>
            <button class="about-btn">Explore services</button>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default About