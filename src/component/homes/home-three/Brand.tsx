import Marquee from "react-fast-marquee";

const brand_data: string[] = [
   "/assets/img/brand/img_01.png",
   "/assets/img/brand/img_02.png",
   "/assets/img/brand/img_03.png",
   "/assets/img/brand/img_04.png",
   "/assets/img/brand/img_05.png",
   "/assets/img/brand/img_06.png",
   "/assets/img/brand/img_07.png",
   "/assets/img/brand/img_08.png",
]

const Brand = () => {
   return (
      <section className="brand pb-150">
         <div className="container">
            <div className="sec-title text-center mb-65">
               <h5 className="sec-title__subtitle">trusted by 10,0000+ teams</h5>
            </div>
         </div>
         <Marquee className="brand__marquee">
            {brand_data.map((item, i) => (
               <div key={i} className="brand__item">
                  <img src={item} alt="" />
               </div>
            ))}
         </Marquee>
      </section>
   )
}

export default Brand
