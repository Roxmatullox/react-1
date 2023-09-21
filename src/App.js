import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Resources from "./components/resources/resources";
import Services from "./components/services/services";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Resources/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
