import { Link } from "react-router-dom";

const FooterTwo = () => {
   return (
      <footer className="site-footer footer__btc pt-100">
         <div className="container">
            <div className="row mt-none-30 pb-100">
               <div className="col-lg-4 col-md-6 mt-30">
                  <div className="footer__btc-about pl-40">
                     <Link to="/" className="footer__logo">
                        <img src="/assets/img/logo/logo-3.svg" alt="" />
                     </Link>
                     <div className="footer__btc-social mt-110">
                        <span>Social Proof</span>
                        <ul className="footer__social ul_li">
                           <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                           <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                           <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                           <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                           <li><Link to="#"><i className="fab fa-telegram-plane"></i></Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 mt-30">
                  <div className="footer__widget-btc">
                     <h3>Useful Link</h3>
                     <ul className="footer__btc-links list-unstyled">
                        <li><Link to="#">Product</Link></li>
                        <li><Link to="#">Features</Link></li>
                        <li><Link to="#">Customers services</Link></li>
                        <li><Link to="#">Social Media</Link></li>
                        <li><Link to="#">Contact</Link></li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 mt-30">
                  <div className="footer__widget-btc">
                     <h3>Any Question?</h3>
                     <ul className="footer__btc-links list-unstyled">
                        <li><Link to="#">What is Bitcoin ?</Link></li>
                        <li><Link to="#">What is manning ?</Link></li>
                        <li><Link to="#">How it works ?</Link></li>
                        <li><Link to="#">Who we are ?</Link></li>
                        <li><Link to="#">How Coindox work ?</Link></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="footer__copyright-btc ul_li_between">
               <div className="copyright-text mt-15">
                  Copyright © 2025 Coindox. All rights reserved.
               </div>
               <div className="footer-text mt-15">
                  Developed  by XpressBuddy
               </div>

            </div>
         </div>
      </footer>
   )
}

export default FooterTwo
