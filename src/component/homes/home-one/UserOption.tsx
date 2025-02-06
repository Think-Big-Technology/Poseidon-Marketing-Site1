interface DataType {
   id: number;
   title: string;
   icon: string;
   list: {
      title: string;
      desc: string;
   }[];
};

const user_option_data: DataType[] = [
   {
      id: 1,
      title: "Personal",
      icon: "/assets/img/icon/up_01.svg",
      list: [
         { title: "Confidentiality", desc: "confidentiality involves safeguarding sensitive." },
         { title: "Security", desc: "Security is the practice of protecting individuals." },
         { title: "Easy access to personal data", desc: "It's essential to be cautious about sharing." },
         { title: "Testing and proactive communication", desc: "Testing and proactive communication are essential components of successful projects," },
      ],
   },
   {
      id: 2,
      title: "Commercial",
      icon: "/assets/img/icon/up_02.svg",
      list: [
         { title: "Automation", desc: "Automation refers to the process of using technology." },
         { title: "Compliance with regulations", desc: "Compliance with regulations is a critical aspect." },
         { title: "Building a new financial network", desc: "Building a new financial network is an ambitious." },
         { title: "Startups for blockchain", desc: "Startups in the blockchain industry have been flourishing in recent years, leveraging." },
      ],
   },
]
const UserOption = () => {
   return (
      <section className="user-option pb-110">
         <div className="container">
            <div className="sec-title style2 text-center mb-20">
               <h2 className="sec-title__title text-50 mb-25">Our Users Options</h2>
               <p>We offer tow types of account on the platform</p>
            </div>
            <div className="row align-items-center">
               {user_option_data.slice(0, 1).map((item => (
                  <div key={item.id} className="col-lg-4">
                     <div className="user-option__item">
                        <div className="icon pos-rel ">
                           <img src={item.icon} alt="" />
                        </div>
                        <h3 className="heading">{item.title}</h3>
                        <ul className="user-option__list list-unstyled mt-45">
                           {item.list.map((list, i) => (
                              <li key={i}>
                                 <span><img src="/assets/img/icon/check_badge.svg" alt="" /></span>
                                 <h4>{list.title}</h4>
                                 <p>{list.desc}</p>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               )))}
               <div className="col-lg-4">
                  <div className="user-option__img text-center">
                     <img src="/assets/img/bg/uo_bg.png" alt="" />
                  </div>
               </div>
               {user_option_data.slice(1, 2).map((item => (
                  <div key={item.id} className="col-lg-4">
                     <div className="user-option__item style2">
                        <div className="icon pos-rel ">
                           <img src={item.icon} alt="" />
                        </div>
                        <h3 className="heading">{item.title}</h3>
                        <ul className="user-option__list list-unstyled mt-45">
                           {item.list.map((list, i) => (
                              <li key={i}>
                                 <span><img src="/assets/img/icon/check_badge.svg" alt="" /></span>
                                 <h4>{list.title}</h4>
                                 <p>{list.desc}</p>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               )))}
            </div>
         </div>
      </section>
   )
}

export default UserOption
