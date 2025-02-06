interface DataType {
   id: number;
   icon: string;
   title: string;
};

const service_data: DataType[] = [
   {
      id: 1,
      icon: "/assets/img/icon/srv_01.svg",
      title: "Instant Payout"
   },
   {
      id: 2,
      icon: "/assets/img/icon/srv_02.svg",
      title: "Internal Integration"
   },
   {
      id: 3,
      icon: "/assets/img/icon/srv_03.svg",
      title: "Granted Security"
   },
   {
      id: 4,
      icon: "/assets/img/icon/srv_04.svg",
      title: "Multiple Cryptocurrencies"
   },
   {
      id: 5,
      icon: "/assets/img/icon/srv_05.svg",
      title: "Data Protection"
   },
   {
      id: 6,
      icon: "/assets/img/icon/srv_06.svg",
      title: "Expert Support Team"
   },
];

const Services = () => {
   return (
      <section id="services" className="service pt-130 pt-xs-80 pb-130 pb-xs-80">
         <div className="container">
            <h2 className="btc-title border-left mb-65">Services</h2>
            <div className="row mt-none-30">
               {service_data.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6 mt-30">
                     <div className="service__single">
                        <div className="icon mb-25">
                           <img src={item.icon} alt="" />
                        </div>
                        <h3>{item.title}</h3>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Services
