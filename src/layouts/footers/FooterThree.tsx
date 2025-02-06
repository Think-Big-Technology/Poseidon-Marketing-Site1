
import { Link } from "react-router-dom";

const FooterThree = () => {
   return (
      <footer className="site-footer footer__ico pos-rel" style={{ backgroundImage: `url(/assets/img/bg/footer_bg.png)` }}>
         <div className="container">
            <div className="row mt-none-30">
               <div className="col-lg-4 mt-30">
                  <div className="footer__widget footer__subscribe">
                     <h2>Subscribe newsletter</h2>
                     <p>Pre-ICOs typically offer early access to the <br /> project&apos;s tokens before the main ICO.
                     </p>
                     <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="coindox@gmail.com" />
                        <button><i className="fas fa-paper-plane"></i></button>
                     </form>
                  </div>
               </div>
               <div className="col-lg-8 mt-30">
                  <div className="footer__widget text-lg-end">
                     <h2>Download Documents</h2>
                     <div className="footer__document ul_li_right">
                        <Link to="#" className="footer__document-item text-center">
                           <div className="icon">
                              <img src="/assets/img/icon/pdf.svg" alt="" />
                           </div>
                           <span className="title"><i className="fas fa-cloud-download-alt"></i>white paper</span>
                        </Link>
                        <Link to="#" className="footer__document-item text-center">
                           <div className="icon">
                              <img src="/assets/img/icon/pdf.svg" alt="" />
                           </div>
                           <span className="title"><i className="fas fa-cloud-download-alt"></i>one paper</span>
                        </Link>
                        <Link to="#" className="footer__document-item text-center">
                           <div className="icon">
                              <img src="/assets/img/icon/pdf.svg" alt="" />
                           </div>
                           <span className="title"><i className="fas fa-cloud-download-alt"></i>privacy policy</span>
                        </Link>
                        <Link to="#" className="footer__document-item text-center">
                           <div className="icon">
                              <img src="/assets/img/icon/pdf.svg" alt="" />
                           </div>
                           <span className="title"><i className="fas fa-cloud-download-alt"></i>terms of sale</span>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer__bottom ul_li_between mt-50">
               <div className="footer__logo mt-20">
                  <Link to="/"><img src="/assets/img/logo/logo.svg" alt="" /></Link>
               </div>
               <ul className="footer__social ul_li mt-20">
                  <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-telegram-plane"></i></Link></li>
               </ul>
            </div>
         </div>
         <div className="footer__copyright mt-35">
            <div className="container">
               <div className="footer__copyright-inner ul_li_between">
                  <div className="footer__copyright-text mt-15">
                     Copyright © 2025 coindox. All rights reserved.
                  </div>
                  <ul className="footer__links ul_li_right mt-15">
                     <li><Link to="#">Privacy</Link></li>
                     <li><Link to="#">Cookies</Link></li>
                     <li><Link to="#">Terms</Link></li>
                     <li><Link to="#">About</Link></li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="footer__icon-shape">
            <div className="icon icon--1">
               <div data-parallax='{"x" : -80}'>
                  <img src="/assets/img/shape/f_icon1.png" alt="" />
               </div>
            </div>
            <div className="icon icon--2">
               <div data-parallax='{"x" : 80}'>
                  <img src="/assets/img/shape/f_icon2.png" alt="" />
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterThree
