import "./footer.css"
import footerlogo from "../../assets/images/nav-logo.svg"

function Footer() {
  return <footer>
    <div className="container">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={footerlogo} alt="" />
        </div>
        <div className="footer-links">
          <p>Copyright © Cleaning X | Designed by <a href="#home">BRIX Templates</a></p>
          <p>- Powered by <a href="#home">Webflow</a><a href="#home">Licenses</a></p>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer