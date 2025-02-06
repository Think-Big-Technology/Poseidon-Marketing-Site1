import { Link } from "react-router-dom";

const FooterOne = () => {
   return (
      <footer className="site-footer footer__blockchain pos-rel pt-95 bg_img" style={{ backgroundImage: `url(/assets/img/bg/footer_bg2.jpg)` }}>
         <div className="container">
            <div className="footer__newsletter ul_li_between mt-none-30">
               <div className="sec-title style2 mt-30">
                  <h2 className="sec-title__title text-50">Get regular updates</h2>
               </div>
               <div className="footer__newsletter-form mt-30">
                  <form onSubmit={(e) => e.preventDefault()}>
                     <input type="text" placeholder="Enter Your Email Address" />
                     <button className="blc-btn">subscribe</button>
                  </form>
               </div>
            </div>
            <div className="row mt-none-30 pb-70">
               <div className="col-lg-4 col-md-6 col-sm-6 mt-30">
                  <div className="footer__widget">
                     <div className="footer__widget-community text-center">
                        <h3>Join Our Blockchain <br /> Community</h3>
                        <Link to="#"><img src="/assets/img/icon/discord.svg" alt="" />join</Link>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 col-sm-6 mt-30">
                  <div className="footer__widget">
                     <h3>Quick Links</h3>
                     <ul className="footer__widget-links list-unstyled">
                        <li><Link to="#">Whitepaper</Link></li>
                        <li><Link to="#">One pager</Link></li>
                        <li><Link to="#">Presentation</Link></li>
                        <li><Link to="#">Contact</Link></li>
                        <li><Link to="#">Token Sale</Link></li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 col-sm-6 mt-30">
                  <div className="footer__widget">
                     <h3>Others Links</h3>
                     <ul className="footer__widget-links list-unstyled">
                        <li><Link to="#">About</Link></li>
                        <li><Link to="#">API Docs</Link></li>
                        <li><Link to="#">News</Link></li>
                        <li><Link to="#">Team</Link></li>
                        <li><Link to="#">FAQ</Link></li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-2 col-md-6 col-sm-6 mt-30">
                  <div className="footer__widget">
                     <h3>legal</h3>
                     <ul className="footer__widget-links list-unstyled">
                        <li><Link to="#">Privacy Policy</Link></li>
                        <li><Link to="#">Terms & Conditions</Link></li>
                        <li><Link to="#">Disclaimer</Link></li>
                        <li><Link to="#">Sitemap</Link></li>
                        <li><Link to="#">Terms & Use</Link></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="footer__copyright-blc ul_li_between">
               <div className="footer__copyright-text mt-15">
                  Copyright © 2025 Coindox. All rights reserved.
               </div>
               <ul className="footer__social ul_li mt-15">
                  <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-telegram-plane"></i></Link></li>
               </ul>
            </div>
         </div>
      </footer>
   )
}

export default FooterOne
