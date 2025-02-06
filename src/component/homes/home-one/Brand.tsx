import { Link } from "react-router-dom";

const brand_data: string[] = [
   "/assets/img/brand/brand_01.png",
   "/assets/img/brand/brand_02.png",
   "/assets/img/brand/brand_03.png",
   "/assets/img/brand/brand_04.png",
   "/assets/img/brand/brand_05.png",
   "/assets/img/brand/brand_06.png",
   "/assets/img/brand/brand_07.png",
   "/assets/img/brand/brand_08.png",
   "/assets/img/brand/brand_09.png",
   "/assets/img/brand/brand_10.png",
   "/assets/img/brand/brand_11.png",
   "/assets/img/brand/brand_12.png",
];

const Brand = () => {
   return (
      <section className="brand brand__sec-bg pb-90 pos-rel" style={{ backgroundImage: `url(/assets/img/bg/brand_bg.png)` }}>
         <div className="container">
            <div className="brand__wrap pos-rel">
               <div className="brand__bg"></div>
               <div className="sec-title style2 text-center mb-50">
                  <h2 className="sec-title__title text-50 mb-25">Our Partners</h2>
                  <p>Discover Our Trusted Blockchain Partners</p>
               </div>
               <div className="brand__item-wrap">
                  {brand_data.map((item, i) => (
                     <div key={i} className="brand__single">
                        <Link to="#"><img src={item} alt="" /></Link>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

   )
}

export default Brand
