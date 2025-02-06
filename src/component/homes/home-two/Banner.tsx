
import { Link } from "react-router-dom";

const Banner = () => {
   return (
      <section className="hero hero__bitcoin">
         <div className="container">
            <div className="row">
               <div className="col-lg-7">
                  <div className="hero__bitcoin-content">
                     <h1 className="title">
                        <span className="wow fadeInUp-2" data-wow-delay="0ms" data-wow-duration=".5s">Smart Bitcoin</span> <br />
                        <span className="wow fadeInUp-2" data-wow-duration=".5s">Mining</span>
                     </h1>
                     <p className="border-left mb-50 wow fadeInUp-2" data-wow-delay="200ms" data-wow-duration=".5s">Cloud mining: Easy and efficient way to earn from <br /> cryptocurrency without equipment.</p>
                     <Link className="btc-btn btc-btn--gradient wow fadeInUp-2" data-wow-delay="300ms" data-wow-duration=".5s" to="#">Start Mininnig Now<i className="far fa-chevron-right"></i></Link>
                  </div>
               </div>
               <div className="col-lg-5">
                  <div className="hero__img">
                     <img src="/assets/img/bg/hero_img.png" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Banner
