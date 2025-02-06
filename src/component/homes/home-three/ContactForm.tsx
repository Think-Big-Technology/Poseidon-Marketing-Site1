import HomeContact from "../../forms/HomeContact"

const ContactForm = () => {
   return (
      <section className="ico-contact pos-rel">
         <div className="container">
            <div className="ico-contact__wrap">
               <h2 className="title">Contact with coindox</h2>
               <HomeContact />
               <div className="ico-contact__shape-img">
                  <div className="shape shape--1">
                     <div data-parallax='{"y" : -50}'>
                        <img src="/assets/img/shape/c_shape1.png" alt="" />
                     </div>
                  </div>
                  <div className="shape shape--2">
                     <div data-parallax='{"y" : 60}'>
                        <img src="/assets/img/shape/c_shape1.png" alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="ico-contact__shape">
            <div className="shape shape--1">
               <img src="/assets/img/shape/f_shape1.png" alt="" />
            </div>
            <div className="shape shape--2">
               <img src="/assets/img/shape/f_shape2.png" alt="" />
            </div>
            <div className="shape shape--3">
               <img src="/assets/img/shape/f_shape3.png" alt="" />
            </div>
         </div>
      </section>
   )
}

export default ContactForm
