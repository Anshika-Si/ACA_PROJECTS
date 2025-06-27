import React, { useState, useEffect } from "react";
import "./Home.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = ({ products, addToCart, addToFavourites }) => {
  const featuredProducts = products.slice(0, 13);

  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  const handleNextProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const currentProduct = products[currentProductIndex];

  return (
    <>
      <div id="banner">
        <img id="shopperLogo" src="images\elogo.png" alt=""/>
        <img id="bannerImage" src="images\new_banner.jpeg" alt=""/>
        <img id="bannerImage2" src="images\new_banner2.jpeg" alt=""/>
      </div>
      <div className="Deal">
        <h2>10% OFF <i>DEAL OF THE DAY</i> </h2>
        <h3>On Orders Of 1400 upto 400</h3>
        <p id="para">
          Major Steals of the Season
        </p>
      </div>
      <div className="last-home-content">
        <h1>Featured Products</h1>

        <Link to="/shop">
          {" "}
          <button>Shop </button>
        </Link>
      </div>  
      <div className="home">
        <div className="product-list">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.path} alt="" />
              <h3 className="name">{product.name}</h3>
              <p className="rating">{product.rating}</p>
              <p className="price">${product.price}</p>
              <p className="brand">{product.brand}</p>
              <button
                className="cart-button"
                onClick={() => addToCart(product)}
              >
                <MdOutlineShoppingCart className="cart-icon" />
              </button>
              <button
                className="favourite-button"
                onClick={() => addToFavourites(product)}
              >
                <FiHeart className="favourite-icon" />
              </button>
            </div>
          ))}
        </div>
        <div className="right-content"> <br/>
        <img id="fashionImage2" src="images/fashion_image2.jpeg" alt=""/> <br/> <br/> <br/>
        <h2 id="hellotext">Shopper's Best Collection</h2>
        
          <div className="featured-product-card">
            <img src={currentProduct.path} alt="" />
            <h3>{currentProduct.name}</h3>
            <p>${currentProduct.price}</p>
            <button
              className="cart-button"
              onClick={() => addToCart(currentProduct)}
            >
              {" "}
              <MdOutlineShoppingCart className="cart-icon" />
            </button>
            <button
              className="favourite-button"
              onClick={() => addToFavourites(currentProduct)}
            >
              <FiHeart className="favourite-icon" />
            </button>
          </div>
          
          ] 
          <br/><img id="fashionImage1" src="images/fashion_image.jpeg" alt=""/> <br/><br/>
        </div>
        <button className="next-button" onClick={handleNextProduct}>
        </button>

      </div>
      
      
      
      
      
      
  
    </>
  );
};


export default Home;
