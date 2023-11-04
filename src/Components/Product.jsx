import { product } from "../Data"

function Product() {
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading"> Our <span>Product</span></h1>

        <div className="box-container">
          {product.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <div className="icons">
              <a href="#" className="fas fa-shopping-cart"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>

              <div className="image">
                <img src={item.img} alt="" />
              </div>

              <div className="content">
                <h3>Fresh Coffee</h3>
                <div className="stars">
                <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>

                <div className="price">
                $15.99 <span>$20.99</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Product
