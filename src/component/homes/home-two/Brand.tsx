import { Link } from "react-router-dom";

const brand_data: string[] = [
   "/assets/img/brand/br_01.png",
   "/assets/img/brand/br_02.png",
   "/assets/img/brand/br_03.png",
   "/assets/img/brand/br_04.png",
   "/assets/img/brand/br_05.png",
];

const Brand = () => {
   return (
      <section className="brand pt-10">
         <div className="container">
            <div className="row align-items-center justify-content-center mt-none-30">
               <div className="col-lg-4">
                  <div className="brand__title border-left mt-30">
                     <h3>Our top Integration</h3>
                     <p>Cloud mining is the easiest and most </p>
                  </div>
               </div>
               <div className="col-lg-8">
                  <div className="brand__logo-wrap ul_li_between">
                     {brand_data.map((item, i) => (
                        <Link key={i} className="brand__logo-item" to="#">
                           <img src={item} alt="" />
                        </Link>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Brand
