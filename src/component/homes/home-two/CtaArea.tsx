
import { Link } from "react-router-dom";

const CtaArea = () => {
   return (
      <section className="btc-cta pb-130 pb-xs-80">
         <div className="container">
            <div className="btc-cta__holder z-1 pos-rel text-center">
               <h2>Ready To Start Your Mining</h2>
               <p>Just create an account on our site and start your first mining.</p>
               <Link className="btc-btn" to="#">Start Mininnig Now<i className="far fa-chevron-right"></i></Link>
               <div className="btc-cta__img">
                  <div className="cta-shape cta-shape--1">
                     <img src="/assets/img/bg/cta_bg1.png" alt="" />
                  </div>
                  <div className="cta-shape cta-shape--2">
                     <img src="/assets/img/bg/cta_bg2.png" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default CtaArea
