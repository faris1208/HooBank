import hooimage from "./images/Group 481750.png";
import discount from "./images/Discount.svg";
import robot from "./images/Group 481777.svg";
import rewards from "./images/Star.svg";
import secured from "./images/Shield Done.svg";
import transfer from "./images/Send.svg";
import netflix from "./images/Group 481776.svg";
import apple from "./images/Group 481724.svg";
import google from "./images/Group 481725.svg";
import analysis from "./images/Group 481775.png";
import founder from "./images/fahey.svg";
import leader from "./images/Image.svg";
import leader2 from "./images/Image (2).svg";
import leader3 from "./images/Image (1).svg";
import airbab from "./images/Group 481734.svg";
import binance from "./images/Group 481735.svg";
import coinbase from "./images/Group 481736.svg";
import dropbox from "./images/Group 481737.svg";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { FiTwitter } from "react-icons/fi";


const Home = () => {
    return ( 
        <div className="container">
            <div className="navbar">
                <div className="navbar-head">
                <img src={hooimage} alt="" className="home-image1" width="100%" />
                    <h3>Hoo<span className="bank">Bank</span></h3>
                </div>
                <div className="navbar-home">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Features</li>
                        <li>Solution</li>
                    </ul>
                </div>
            </div>

            <div className="container2">
                <div className="payment-contents">
                    <div className="old">
                        <div className="account">
                            <img src={discount} alt="" className="account-image" width="100%" />
                            <h4>20% <span className="one"> DISCOUNT FOR</span> 1 MONTH <span className="one"> ACCOUNT</span></h4>
                        </div>
                    </div>
                    <div className="generation">
                        <h1>The Next <span className="two">Generation</span> Payment Method.</h1>
                        <h6>Get Started</h6>
                    </div>
                    <div className="annual">
                        <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
                            We examine annual percentage rates, annual fees.
                        </p>
                    </div>
                </div>

                <div className="hand">
                   <img src={robot} alt="" className="hand-image" width="100%" />
                </div>
            </div>

            <div className="transaction">
                <div className="transaction-contents">
                    <div className="trusted">
                        <h2>3800+</h2>
                        <h5>USER ACTIVE</h5>
                    </div>
                    <div className="trusted">
                        <h2>230+</h2>
                        <h5>TRUSTED BY COMPANY</h5>
                    </div>
                    <div className="trusted">
                        <h2>$230M+</h2>
                        <h5>TRANSACTION</h5>
                    </div>
                </div>
            </div>

            <div className="money">
                <div className="money-head">
                    <h1>You do the business, we’ll handle the money.</h1>
                    <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                    <button className="btn1">Get Started</button>
                </div>
                <div className="money-contents">
                    <div className="money-rewards">
                      <div className="new"><img src={rewards} alt="" className="money-image" width="100%" /></div>
                        <div className="credit">
                            <h5>Rewards</h5>
                            <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                        </div>
                    </div>
                    <div className="money-rewards1">
                    <div className="new"><img src={secured} alt="" className="money-image" width="100%" /></div>
                        <div className="credit">
                            <h5>100% secured</h5>
                            <p>We take proactive steps make sure your information and transactions are secure.</p>
                        </div>
                    </div>
                    <div className="money-rewards">
                    <div className="new"><img src={transfer} alt="" className="money-image" width="100%" /></div>
                        <div className="credit">
                            <h5>Balance Transfer</h5>
                            <p>A balance transfer credit card can save you a lot of money in interest charges.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="invoicing">
                <div className="dribble-content">
                    <div className="dribble"><img src={netflix} alt="" className="dribble-image" width="100%" /></div>
                </div>
                <div className="billing">
                    <div className="control">
                        <h1>Easily control your billing & invoicing.</h1>
                        <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                        <div className="google">
                            <div className="apple"><img src={apple} alt="" className="google-image" width="100%" /></div>
                            <div className="apple"><img src={google} alt="" className="google-image" width="100%" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="money-head">
                    <h1>Find a better card deal in few easy steps.</h1>
                    <p>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                    <button className="btn1">Get Started</button>
                </div>
                <div className="analysis">
                     <img src={analysis} alt="" className="analysis-image" width="100%" />
                </div>
            </div>

            <div className="people">
                <h1>What people are saying about us</h1>
                <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>

            <div className="founder-container">
                <div className="founder-contents">
                    <div className="head">
                        <div className="founder-head">
                            <img src={founder} alt="" className="founder-image" width="100%" />
                            <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                        </div>
                        <div className="leader">
                            <img src={leader} alt="" className="leader-image" width="100%" />
                            <div className="leader-text">
                                <h5>Herman Jensen</h5>
                                <p>Founder & Leader</p>
                            </div>
                        </div>
                     </div>
                </div>
                <div className="founder-contents">
                    <div className="head1">
                        <div className="founder-head">
                            <img src={founder} alt="" className="founder-image" width="100%" />
                            <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                        </div>
                        <div className="leader">
                            <img src={leader2} alt="" className="leader-image" width="100%" />
                            <div className="leader-text">
                                <h5>Steve Mark</h5>
                                <p>Founder & Leader</p>
                            </div>
                        </div>
                     </div>
                </div>
                <div className="founder-contents">
                    <div className="head1">
                        <div className="founder-head">
                            <img src={founder} alt="" className="founder-image" width="100%" />
                            <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                        </div>
                        <div className="leader">
                            <img src={leader3} alt="" className="leader-image" width="100%" />
                            <div className="leader-text">
                                <h5>Kenn Gallagher</h5>
                                <p>Founder & Leader</p>
                            </div>
                        </div>
                     </div>
                </div>
            </div>

            <div className="coinbase">
                <div className="binance">
                    <img src={airbab} alt="" className="airbab-image" width="100%" />
                    <img src={binance} alt="" className="airbab-image" width="100%" />
                    <img src={coinbase} alt="" className="airbab-image" width="100%" />
                    <img src={dropbox} alt="" className="airbab-image" width="100%" />
                </div>
            </div>

            <div className="service-contents">
                <div className="service-head">
                    <div className="service">
                        <h1>Let’s try our service now!</h1>
                        <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                    </div>
                    <button className="btn2">Get Started</button>
                </div>
            </div>

            <footer>
        <div className="footer-container">
            <div className="footer-contents">
                <div className="footer-rent">
                    <div className="navbar-head">
                        <img src={hooimage} alt="" className="home-image1" width="100%" />
                        <h3>Hoo<span className="bank">Bank</span></h3>
                    </div>
                    
                    <div className="info">
                        <p>A new way to make the payments easy, reliable and secure.</p>
                    </div>
                </div>
                <div className="footer-blogs">
                    <div className="footer-sell">
                        <h5>Usefull Links</h5>
                        <h6>Contents</h6>
                        <h6>How ist Works</h6>
                        <h6>Create</h6>
                        <h6>Explore</h6>
                        <h6>Terms & Services</h6>
                    </div>
                    <div className="footer-sell">
                        <h5>Community</h5>
                        <h6>Help Center</h6>
                        <h6>Partner</h6>
                        <h6>Suggestion</h6>
                        <h6>blog</h6>
                        <h6>News Letter</h6>
                    </div>
                    <div className="footer-sell">
                        <h5>Partner</h5>
                        <h6>Our Partner</h6>
                        <h6>Become a Partner</h6>
                    </div>
                    <div className="footer-sell">
                        <h5>Resources</h5>
                        <h6>FAQ</h6>
                        <h6>Blogs</h6>
                        <h6>Guide</h6>
                    </div>
                </div>
            </div>
            <div className="reserved">
                <div className="last">
                    <h6>Copyright</h6>
                    <p>2021 HooBank. All Rights Reserved.</p>
                </div>
               <div className="far">
                    <IoLogoInstagram className="instagram" />
                    <CiFacebook className="facebook" />
                    <FiTwitter  className="linkedin" />
                    <CiLinkedin  className="linkedin" />
                </div>
            </div>
        </div>
    </footer>

        </div>
     );
}
 
export default Home;