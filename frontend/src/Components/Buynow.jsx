import React from "react";
import '../Styles/buynow.css'
const Buynow = () =>{
    return(
        <div className="buynowPage">
            <div className="buynowPageCont">
                <div className="buynowPageCont-row">
                    <p className="continueShop"><i></i> Continue Shopping</p>
                    <hr />
                    <p className="cartShop">Shopping cart</p>
                    <p className="cartCount"><span>You have {4} items in your cart</span></p>
{/*  */}
                    <div className="buynowPageProdDetails">
                        <div className="buynowPageProdDetails-col">
                            <div className="buynowPageProdDetails-col1-row1">
                                <img src="/src/images/casio.jpg" alt="" />
                            </div>
                            <div className="buynowPageProdDetails-col1-row1">
                                <p className="prodName">TISSOT</p>
                                <p className="prodSpec">CLASSIC</p>
                            </div>
                        </div>
                        <div className="buynowPageProdDetails-col">
                            <p>1</p>
                            <p>$100</p>
                            <p><i className="fa-solid fa-trash"></i></p>
                        </div>
                    </div>
                    <div className="buynowPageProdDetails">
                        <div className="buynowPageProdDetails-col">
                            <div className="buynowPageProdDetails-col1-row1">
                                <img src="/src/images/home 3.jpg" alt="" />
                            </div>
                            <div className="buynowPageProdDetails-col1-row1">
                                <p className="prodName">ROLEX</p>
                                <p className="prodSpec">CLASSIC</p>
                            </div>
                        </div>
                        <div className="buynowPageProdDetails-col">
                            <p>1</p>
                            <p>$300</p>
                            <p><i className="fa-solid fa-trash"></i></p>
                        </div>
                    </div>
                    <div className="buynowPageProdDetails">
                        <div className="buynowPageProdDetails-col">
                            <div className="buynowPageProdDetails-col1-row1">
                                <img src="/src/images/home 32.jpg" alt="" />
                            </div>
                            <div className="buynowPageProdDetails-col1-row1">
                                <p className="prodName">FOSSIL</p>
                                <p className="prodSpec">CLASSIC</p>
                            </div>
                        </div>
                        <div className="buynowPageProdDetails-col">
                            <p>1</p>
                            <p>$100</p>
                            <p><i className="fa-solid fa-trash"></i></p>
                        </div>
                    </div>
                    <div className="buynowPageProdDetails">
                        <div className="buynowPageProdDetails-col">
                            <div className="buynowPageProdDetails-col1-row1">
                                <img src="/src/images/rolex 2.jpg" alt="" />
                            </div>
                            <div className="buynowPageProdDetails-col1-row1">
                                <p className="prodName">TIXEN</p>
                                <p className="prodSpec">CHAIN</p>
                            </div>
                        </div>
                        <div className="buynowPageProdDetails-col">
                            <p>1</p>
                            <p>$400</p>
                            <p><i className="fa-solid fa-trash"></i></p>
                        </div>
                    </div>
     
                </div>
                <div className="buynowPageCont-row">
                    <p>Card details</p>
                    <p>Card type</p>
                    <ul className="card-type">
                        <li><i class="fa-brands fa-google-pay"></i></li>
                        <li><i class="fa-brands fa-paypal"></i></li>
                        <li><i class="fa-solid fa-credit-card"></i></li>
                        <li><i class="fa-brands fa-apple-pay"></i></li>
                        <li><i class="fa-solid fa-comments-dollar"></i></li>
                    </ul>

                    <form action="">
                        <div className="buynowPage-fields">
                            <label htmlFor="card-type">Name on card</label>
                                <input type="text" name="card-type" id="" placeholder="Name " required />
                        </div>
                        <div className="buynowPage-fields">
                            <label htmlFor="card-no">Card number</label>
                                <input type="text" name="card-no" id="" placeholder="0000 0000 0000 0000" required />
                        </div>
                        <div className="buynowPage-fields">
                            <div className="buynowPage-fields-row11">
                                <label htmlFor="date">Date</label>
                                <input type="text" placeholder="mm / yy" required />
                            </div>
                            <div className="buynowPage-fields-row11">
                                <label htmlFor="cvv">Cvv</label>
                                <input type="text" placeholder="000" required />
                            </div>
                        </div>

                    </form>
                        <hr />
                    <ul className="checkout-ul">
                        <li><span>Sub total</span> <span>$900.00</span></li>
                        <li><span>Shipping</span> <span>$50.00</span></li>
                        <li><span>Total(Incl.taxes)</span> <span>$950.00</span></li>
                    
                        <button><span>$950.00</span> <span>Checkout</span></button>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Buynow;