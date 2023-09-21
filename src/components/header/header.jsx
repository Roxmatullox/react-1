import "./header.css"
import navlogo from "../../assets/images/nav-logo.svg"

function Header() {
  return <header>
    <nav>
      <div className="container">
        <div className="header-container">
          <div className="header-left">
            <img src={navlogo} alt="logo" />
            <a class="header-link" href="#home">Home</a>
            <a class="header-link" href="#about">about</a>
            <a class="header-link" href="#services">Services</a>
            <a class="header-link" href="#articles">Articles</a>
            <a class="header-link" href="#contact">Contact</a>
          </div>
          <div className="header-right">
            <p class="total-carts">Cart(<span>0</span>)</p>
            <button class="header-btn">Get a free quote</button>
          </div>
        </div>
      </div>
    </nav>
  </header>
}

export default Header