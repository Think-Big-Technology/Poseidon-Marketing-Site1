interface DataType {
   id: number;
   icon: string;
   title: string;
   desc: string;
};

const solution_data: DataType[] = [
   {
      id: 1,
      icon: "/assets/img/icon/s_01.svg",
      title: "Blockchain Protocol Support",
      desc: "Our supports different blockchain protocols, such as Ethereum",
   },
   {
      id: 2,
      icon: "/assets/img/icon/s_02.svg",
      title: "Analytics and Monitoring",
      desc: "Comprehensive analytics and monitoring tools are included",
   },
   {
      id: 3,
      icon: "/assets/img/icon/s_03.svg",
      title: "Security Measures",
      desc: "Robust security features and cryptographic protocols",
   },
   {
      id: 4,
      icon: "/assets/img/icon/s_04.svg",
      title: "Governance Mechanisms",
      desc: "Some platforms provide built-in governance features",
   },
];

const Solution = () => {
   return (
      <section className="solution pt-10 pb-70 p-relative z-index-1">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div className="solution__content">
                     <div className="sec-title style2 mb-60">
                        <h2 className="sec-title__title text-50 mb-25">Our Best Blockchain <br /> Solution Platform</h2>
                        <p>A blockchain solution platform is a comprehensive software or <br /> infrastructure that enables businesses and developers to build,</p>
                     </div>
                     <ul className="solution__list list-unstyled">
                        {solution_data.map((item) => (
                           <li className="z-index-1" key={item.id}>
                              <div className="icon">
                                 <img src={item.icon} alt="" />
                              </div>
                              <h4>{item.title}</h4>
                              <p>{item.desc}</p>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="solution__img pos-rel">
                     <img src="/assets/img/shape/s_circle_1.png" alt="" />
                     <div className="solution__img-sml">
                        <div className="circle circle--1">
                           <div data-parallax='{"x" : -60}'>
                              <img src="/assets/img/shape/s_circle_1.png" alt="" />
                           </div>
                        </div>
                        <div className="circle circle--2">
                           <div data-parallax='{"x" : 60}'>
                              <img src="/assets/img/shape/s_circle_1.png" alt="" />
                           </div>
                        </div>
                        <div className="circle circle--3">
                           <div data-parallax='{"y" : -60}'>
                              <img src="/assets/img/shape/s_circle_1.png" alt="" />
                           </div>
                        </div>
                     </div>
                     <div className="solution__icon">
                        <img src="/assets/img/icon/s_icon.png" alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Solution
