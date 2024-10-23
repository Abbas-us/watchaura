import React from "react";
import '../Styles/contact.css'
const Contact = () =>{
    return(
        <div className="contactPage">
            <div className="contact-Cont">
                <div className="cont-box">
                    <div className="contact-us">
                        <p id="ct-title">CONTACT US</p>
                        <div className="ct-us">
                            <p> <i class="fa-solid fa-phone"></i> Call us</p>
                            <p>+002 234 567</p>
                        </div>
                        <div className="ct-us">
                            <p> <i class="fa-solid fa-location-dot"> </i> Location</p>
                            <p>123, thillai street, Chennai - 600001.</p>
                        </div>
                        <div className="ct-us">
                            <p> <i class="fa-solid fa-envelope"> </i> Mail</p>
                            <p>watchaurasupport@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="cont-box">
                    <form action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="01c80738-5d04-495e-8484-91dcc18d3fbc" />
                        <div className="cont-top">
                            <div className="fields">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" placeholder="Enter Your Name" id="" required />
                            </div>
                            <div className="fields">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" placeholder="Enter Your Email Address" id="" required />
                            </div>
                        </div>
                        <div className="fields">
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" placeholder="Enter Your Address" id="" required />
                        </div>
                        <div className="fields2">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="" rows="5"  placeholder="Enter Your Message Here..." required></textarea>
                            {/* <input type="text" name="message" placeholder="Enter Your Message Here..." id="" /> */}
                        </div>
                        <input type="checkbox" name="botcheck" class="hidden" style={{display: "none"}} />
                        <div className="fields">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;