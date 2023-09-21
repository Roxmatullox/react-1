import  "./services.css";
import house from "../../assets/images/house.svg"
import office from "../../assets/images/office.svg"
import industrial from "../../assets/images/industrial.svg"
import cowid from "../../assets/images/cowid.svg"
import calllogo from "../../assets/images/call-logo.svg"
import line from "../../assets/images/line.svg"

function Services() {
  return <section id="services">
    <div className="container">
      <div className="services-section">
        <div className="services-title">
          <h2>Our Services</h2>
          <button class="about-btn">Explore services</button>
        </div>
        <div className="services-content">
          <div className="services-carts">
            <div className="services-cart">
              <img src={house} alt="" />
              <h5>House cleaning</h5>
              <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
            <div className="services-cart">
              <img src={office} alt="" />
              <h5>Office cleaning</h5>
              <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
            <div className="services-cart">
              <img src={industrial} alt="" />
              <h5>Industrial cleaning</h5>
              <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cowid-section">
        <div className="cowid-left">
          <img src={cowid} alt="" />
        </div>
        <div className="cowid-right">
          <h5>Covid-19 sanitization</h5>
          <h2>We follow guidelines to keep you safe from the COVID-19 virus</h2>
          <p>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
          <div className="home-call">
            <div>
            <button class="header-btn">Get a free quote</button>
            </div>
            <img src={calllogo} alt="" />
            <h4>(414) 567 - 2109</h4>
          </div>
        </div>
      </div>
      <img src={line} alt="" />
    </div>
  </section>
}

export default Services