import "./home.css"
import homeimg from "../../assets/images/home-img.svg"
import calllogo from "../../assets/images/call-logo.svg"


function Home() {
  return <section id="home">
    <div className="container">
      <div className="home-section">
        <div className="home-left">
          <h1>Quality cleaning for your home</h1>
          <p>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
          <div className="home-call">
            <div>
            <button class="header-btn">Get a free quote</button>
            </div>
            <img src={calllogo} alt="" />
            <h4>(414) 567 - 2109</h4>
          </div>
        </div>
        <div className="home-right">
          <img src={homeimg} alt="" />
        </div>
      </div>
    </div>
  </section>
}

export default Home