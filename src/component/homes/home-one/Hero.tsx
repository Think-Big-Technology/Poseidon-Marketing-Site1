
import { Link } from "react-router-dom";

const Hero = () => {
   return (
      <section className="hero hero__blockchain pos-rel bg_img" style={{ backgroundImage: `url(assets/img/bg/blockchain_hero_bg.png)` }}>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-7">
                  <div className="blockchain-hero__content">
                     <h1 className="title text-80 mb-35 -tracking-2/4"> The Trident Of Success For <br /> Contractors </h1>

                     <p className="mb-50 text-20 leading-30"> Boost Your Contracting Business with our Integrated<br /> Software Solutions! </p>
                     <div className="btns">
                        <Link className="blc-btn" to="#">Learn More</Link>
                        {/* <Link className="blc-btn blc-btn--white" to="#">white paper</Link> */}
                     </div>
                  </div>
               </div>
               <div className="col-lg-5">
                  <div className="hero__blockchain-icon pos-rel">
                     <div className="icon ul_li icon--1 absolute">
                        <span className="text-white mr-5">Secure & Safe</span>
                        <img src="/assets/img/icon/sc.svg" alt="" />
                     </div>
                     <div className="icon ul_li icon--2 absolute">
                        <span className="text-white mr-5">Tested</span>
                        <img src="/assets/img/icon/sc.svg" alt="" />
                     </div>
                     <div className="icon ul_li icon--3 absolute">
                        <span className="text-white mr-5">Trustworthy</span>
                        <img src="/assets/img/icon/sc.svg" alt="" />
                     </div>
                     <div className="icon ul_li icon--4 absolute">
                        <img src="/assets/img/icon/sc.svg" alt="" />
                        <span className="text-white ml-5">Optimized</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Hero
