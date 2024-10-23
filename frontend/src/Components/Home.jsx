import React, { useEffect, useState } from "react";
import '../Styles/home.css'
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const Home = () =>{


    
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        const response = await fetch('http://localhost:5001/products-list');
        const data = await response.json();
        setProductList(data);
  };
    
  useEffect(()=>{
    getProducts();
  },[])

    return(
        <div className="homePage">
            <div id="homeContainer">
                <div className="H-boxx H-Con1">
                    <p>Welcome to<br/><span>WATCH AURA</span></p>
                    <p>"A portable timepiece intended to be carried or worn by a person"</p>
                    <div id="btns-home">
                        <button className="home-btn1"><NavLink to={'/about-us'} className="home-nav1-link">About</NavLink></button>
                        <button className="home-btn2"><NavLink to={"/products"} className="home-nav2-link">Shop Now</NavLink></button>
                    </div>
                </div>
                <div className="H-boxx H-Con2">
                    <p id="hts-title">Top Selling Categories</p>
                    <div className="category-div">
                        <div className="categories">
                            <div className="img-holder">
                                  <img src="/src/Images/rolex.jpg" alt="" />
                            </div>
                            <p>ROLEX</p>
                        </div>
                        <div className="categories">
                            <div className="img-holder">
                                  <img src="/src/Images/casio.jpg" alt="" />
                            </div>
                            <p>CASIO</p>
                        </div>
                        <div className="categories">
                            <div className="img-holder">
                                  <img src="/src/Images/fastrack.jpg" alt="" />
                            </div>
                            <p>Fastrack</p>
                        </div>
                        <div className="categories">
                            <div className="img-holder">
                                  <img src="/src/Images/fossil.jpg" alt="" />
                            </div>
                            <p>FOSSIL</p>
                        </div>
                        <div className="categories">
                            <div className="img-holder">
                                  <img src="/src/Images/seiko.jpg" alt="" />
                            </div>
                            <p>SEIKO</p>
                        </div>
                        <div className="categories">
                            <div className="img-holder">
                                  <img src="/src/Images/tissot.jpg" alt="" />
                            </div>
                            <p>TISSOT</p>
                        </div>
                        <div className="categories">
                            <div className="img-holder">
                                  <img src="/src/Images/omega.jpg" alt="" />
                            </div>
                            <p>OMEGA</p>
                        </div>
                    </div>
                </div>
                <div className="H-boxx H-Con3">
                    <p id="hts-title">DISCOUNTS</p>
                    <div className="top-selling-category">
                        <div className="category-boxes">
                            <div className="row-ts1">
                                <p>Minimum 50% off </p>
                            </div>
                            <div className="row-ts2">
                                <div className="row-ts-box">
                                    <img src="/src/Images/home.jpg" alt="" />
                                    <p></p>
                                </div>
                                <div className="row-ts-box">
                                    <img src="/src/Images/home1.jpg" alt="" />
                                    <p></p>
                                    
                                </div>
                                <div className="row-ts-box">
                                    <img src="/src/Images/omega.jpg" alt="" />
                                    <p></p>
                                    
                                </div>
                                <div className="row-ts-box">
                                    <img src="/src/Images/rolex 1.jpg" alt="" />
                                    <p></p>
                                    
                                </div>
                            </div>
                            <div className="view-btn">
                               <button><a href="">View more</a></button>
                            </div>
                        </div>
                        <div className="category-boxes">
                            <div className="row-ts1">
                                <p>Save upto 25%</p>
                            </div>
                            <div className="row-ts2">
                                <div className="row-ts-box">
                                    <img src="/src/Images/home 2.jpg" alt="" />
                                    <p></p>
                                </div>
                                <div className="row-ts-box">
                                    <img src="/src/Images/home 21.jpg" alt="" />
                                    <p></p>
                                    
                                </div>
                                <div className="row-ts-box">
                                    <img src="/src/Images/home 22.jpg" alt="" />
                                    <p></p>
                                    
                                </div>
                                <div className="row-ts-box">
                                    <img src="/src/Images/home 23.jpg" alt="" />
                                    <p></p>
                                    
                                </div>
                            </div>
                            <div className="view-btn">
                                <button><a href="">View more</a></button>
                            </div>
                        </div>
                        <div className="category-boxes">
                            <div className="row-ts1">
                                <p>Unique Watches</p>
                            </div>
                            <div className="row-ts2">
                                <div className="row-ts-box">
                                    <img src="/src/Images/home 3.jpg" alt="" />
                                    <p></p>
                                </div>
                                <div className="row-ts-box">
                                    <img src="/src/Images/home 31.jpg" alt="" />
                                    <p></p>
                                    
                                </div>
                                <div className="row-ts-box">
                                    <img src="/src/Images/home 32.jpg" alt="" />
                                    <p></p>
                                    
                                </div>
                                <div className="row-ts-box">
                                    <img src="/src/Images/home 33.jpg" alt="" />
                                    <p></p>
                                    
                                </div>
                            </div>
                            <div className="view-btn">
                               <button><a href="">View more</a></button>
                            </div>
                        </div>

                    </div>
                    
                </div>
                
            </div>

            {/* <Footer></Footer> */}
        </div>
    )
}

export default Home;

