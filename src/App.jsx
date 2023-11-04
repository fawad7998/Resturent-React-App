import "./assets/css/style.css";
import About from "./components/About";
import Blog from "./components/Blogs";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Product from "./Components/Product";
import Review from "./components/Review";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Product />
      <Review />
      <Contact />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
