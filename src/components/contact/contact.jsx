import "./contact.css"
import calllogo from "../../assets/images/call-logo.svg"



function Contact() {
  return <section id="contact">
    <div className="container">
      <div className="contact-section">
        <div className="contact-left">
          <h2>
            Contact Us
          </h2>
          <p>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
          <div className="home-call">
            <img src={calllogo} alt="" />
            <h4>(414) 567 - 2109</h4>
          </div>
          <h3>Not convinced yet?</h3>
          <p>Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
          <button class="about-btn">Explore services</button>
        </div>
        <div className="contact-right">
          <form action="#">
            <div className="full-name">
              <label htmlFor="fullname">Full name</label>
              <input type="text" id="fullname" required />
            </div>
            <div className="phone-number">
              <label htmlFor="phonenumber">Phone number</label>
              <input type="text" id="phonenumber" />
            </div>
            <div className="address">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" />
            </div>
            <div className="email">
              <label htmlFor="Email">Email</label>
              <input type="text" id="Email" />
            </div>
            <div className="request">
              <label htmlFor="request">Requested service</label>
              <input type="text" id="request" />
            </div>
            <div className="service">
              <label htmlFor="service">Day of service</label>
              <input type="text" id="service" />
            </div>
            <div className="add">
              <label htmlFor="add">Add a note</label>
              <input type="text" id="add" />
            </div>
            <div>
            <button type="submit" class="header-btn">Submit message</button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  </section>
}


export default Contact