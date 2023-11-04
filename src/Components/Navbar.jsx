import  { useRef } from "react";
import Logo from "../assets/images/logo.png";
import { cart } from "../Data";
// import { Link } from "react-router-dom";


function Navbar() {
   const searchRef = useRef();
   const cartRef = useRef();
   const navbarRef = useRef();

  const searchHandler = () => {
    searchRef.current.classList.toggle("active")
    navbarRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  
  };

  const cartHandler = () =>{
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  }

  const navbarHandler = () =>{
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  }
  return (
    <>
      <header className='header' >
        <a href="#" className="logo">
          <img src={Logo} alt="" />
        </a>

        <nav className="navbar" ref={navbarRef} >

        <a href="#Home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#products">Products</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
        <a href="#blogs">Blogs</a>

        {/* <Link to="/home">  <a href="">Home</a> </Link>
        <Link to="/about"> <a href="">About</a> </Link>
        <Link to="/menu">  <a href="">Menu</a> </Link>
        <Link to="/product">  <a href="">Products</a> </Link>
        <Link to="/review">  <a href="">Review</a> </Link>
        <Link to="/contact">  <a href="">Contact</a> </Link>
        <Link to="/blogs">  <a href="">Blogs</a> </Link> */}

        </nav>

        <div className="icons">
          <div className="fas fa-search" id="search-btn" onClick={searchHandler}  ></div>
          <div className="fas fa-shopping-cart" id="cart-btn"
            onClick={cartHandler}></div>
          <div className="fas fa-bars" id="menu-btn"  onClick={navbarHandler}></div>
        </div>

        <div className="search-form " ref={searchRef}>
          <input type="search" placeholder="Search Here" />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>

        <div className="cart-items-container" ref={cartRef}>
        {cart.map((item, index )=>(
          <div className="cart-item" key={index * Math.random()}>
          <span className="fas fa-times"></span>
          <img src={item.img} alt="" />
       
          <div className="content">
          <h3>cart item 01</h3>
          <div className="price">$15.99/-</div>
          </div>
          </div>
        ))}
        <a href="#" className="btn">
            checkout now
          </a>
        </div>
      </header>

    </>
  )
}

export default Navbar
