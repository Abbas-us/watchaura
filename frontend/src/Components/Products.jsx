import React, { useEffect, useRef, useState } from "react";
// import './'
import '../Styles/product.css'
import { NavLink } from "react-router-dom";
import ProductCard from "./ProductCard";
const Products = () =>{

    
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        const response = await fetch('http://localhost:5001/products-list');
        const data = await response.json();
        setProductList(data);
        console.log(data)
  };
    
  useEffect(()=>{
    getProducts();
  },[])
  
  async function AddtoCart(e){

    
  const response = await fetch('http://localhost:5001/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartItem),
  });

  
  if (response.ok) {
    alert(`${productList.title} added to cart!`);
  } else {
    alert('Error adding product to cart.');
  }
  
  };
    return(
        <div className="productsPage">
        <div id="product-body">
{/* 2 */}
            <div className="prod-body-top">
                <span id="prod-body-hamb"><i class="fa-solid fa-bars" ></i></span>
                <div id="prod-body-searchDiv">
                    <input type="text" placeholder="Search item here..." />
                    <span id="prod-body-searchIcon"><i class="fa-solid fa-magnifying-glass"></i></span>
                </div>
                <div id="prod-body-offers">
                    
                </div>
            </div>

           
                <div id="prod-list-details">
                    <div id="prod-list-details-top">
                        <div id="prod-category-variant">
                            <ul>
                                <i className="fa-solid fa-filter"></i>
                                <li>ROLEX</li>
                                <li>TITAN</li>
                                <li>TISSOT</li>
                                <li>FOSSIL</li>
                                <li>G SHOCK</li>
                                <li>CASIO</li>
                            </ul>
                        </div>
                    </div>
                    <div id="prod-list-details-middle">
                       {productList.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                        <div className="prod-showcase">
                            <img src='/src/images/rolex.jpg' alt="" />
                            <div id="prod-img-details">
                                <p>ROLEX</p>
                                <p>$4567 <span>32%</span></p>
                                <div id="addfav">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <button onClick={AddtoCart} ><NavLink to = {'/view-more'} className ="navLink" >ADD TO CART</NavLink></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;