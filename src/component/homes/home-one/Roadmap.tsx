interface DataType {
   id: number;
   title: JSX.Element;
   list: string[];
};

const roadmap_data: DataType[] = [
   {
      id: 1,
      title: (<>Standard Monthly <br />Streamline projects, track time, collaborate efficiently.</>),
      list: ["$175 / Month", "*** Per User ***", "Inspections", "Time Tracking", "Project Management", "Scheduling / Dispatching"],
   },
   {
      id: 2,
      title: (<>Standard Yearly<br />Streamline projects, track time, collaborate efficiently.</>),
      list: ["$149 / Month", "*** Per User ***", "Inspections", "Time Tracking", "Project Management", "Scheduling / Dispatching"],
   },
   {
      id: 3,
      title: (<>Enterprise Monthly<br />Scalable solution with robust features, extensive support</>),
      list: ["$4,500 / Month", "* Unlimited Users, Flat Pricing", "All Included in Plus", "White Label / Custom Branding", "Custom Integrations", "24/7 Support"],
   },
   {
      id: 4,
      title: (<>Enterprise Yearly<br />Scalable solution with robust features, extensive support</>),
      list: ["$3,825 / Month", "* Unlimited Users, Flat Pricing", "All Included in Plus", "White Label / Custom Branding", "Custom Integrations", "24/7 Support"],
   },
   {
      id: 5,
      title: (<>Plus monthly<br />Advanced features for growth, enhanced reporting.</>),
      list: ["$289 / Month", "*** Per User ***", "All Included in Standard", "CRM", "Invoicing", "Active Location Tracking"],
   },
   {
      id: 6,
      title: (<>Plus Yearly<br />Advanced features for growth, enhanced reporting.</>),
      list: ["$245 / Month", "*** Per User ***", "All Included in Standard", "CRM", "Invoicing", "Active Location Tracking"],
   },
]

const Roadmap = () => {
   return (
      <section id="roadmap" className="roadmap pb-135 pt-120">
         <div className="container">
            <div className="sec-title style2 text-center mb-60">
               <h2 className="sec-title__title text-50 mb-25">Roadmap</h2>
               {/* <p>blockchain a Solid Infrastructure for Growth</p> */}
            </div>
            <div className="roadmap__list pos-rel">
               {roadmap_data.map((item) => (
                  <div key={item.id} className="roadmap__list-box">
                     <div className="roadmap__list-inner">
                        <div className="icon">
                           <img src="/assets/img/icon/rm_icon.png" alt="" />
                        </div>
                        <h3>{item.title}</h3>
                        <ul className="list-unstyled">
                           {item.list.map((list, i) => (
                              <li key={i}>{list}</li>
                           ))}
                        </ul>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Roadmap
