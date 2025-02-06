import { useEffect, useState } from "react";
import faq_data_two from "../../../data/FaqDataTwo";

interface FaqItem {
   id: number;
   faq_data: {
      showAnswer: boolean;
      id: number;
      page: string;
      title: string;
      desc: string;
   }[];
}

const FaqArea = () => {
   const [activeTab, setActiveTab] = useState<number>(0);
   const [faqData, setFaqData] = useState<FaqItem[]>([]);

   const handleTabClick = (index: number) => {
      setActiveTab(index);
   };

   useEffect(() => {
      // Initialize state from data
      const initialFaqData: FaqItem[] = faq_data_two.map((faq) => ({
         ...faq,
         faq_data: faq.faq_data.map((item) => ({ ...item, showAnswer: false })),
      }));
      setFaqData(initialFaqData);
   }, []);

   const toggleAnswer = (faqIndex: number, itemIndex: number) => {
      setFaqData((prevFaqData) =>
         prevFaqData.map((faq, index) =>
            index === faqIndex
               ? {
                  ...faq,
                  faq_data: faq.faq_data.map((item, i) => ({
                     ...item,
                     showAnswer: i === itemIndex ? !item.showAnswer : false,
                  })),
               }
               : faq
         )
      );
   };

   const tabTitles = faq_data_two.map((faq) => faq.faq_data[0]?.page || "Tab");

   return (
      <section className="faq pb-120 pb-xs-80">
         <div className="container">
            <div className="row mb-20 align-items-end">
               <div className="col-lg-6 col-md-5 mb-30">
                  <h2 className="btc-title border-left">Question</h2>
               </div>
               <div className="col-lg-6 col-md-7 mb-20">
                  <ul className="nav faq__nav ul_li_right nav-tabs" id="myTab" role="tablist">
                     {tabTitles.map((tab, index) => (
                        <li key={index} onClick={() => handleTabClick(index)} className="nav-item" role="presentation">
                           <button className={`nav-link ${activeTab === index ? "active" : ""}`}>{tab}</button>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            <div className="faq__btc">
               <div className="tab-content" id="myTabContent">
                  {faqData.map((items, index) => (
                     <div
                        key={items.id}
                        className={`tab-pane animated fadeInUp show ${activeTab === index ? "active" : ""}`}
                        id={`tab-${items.id}`}
                        role="tabpanel"
                     >
                        <div className="accordion_box clearfix" id="accordionTwo">
                           {items.faq_data.map((item, itemIndex) => (
                              <div
                                 key={item.id}
                                 className={`block accordion-item ${item.showAnswer ? "active" : ""}`}
                                 id={`heading${item.id}`}
                              >
                                 <button
                                    className={`acc-btn accordion-button ${item.showAnswer ? "" : "collapsed"}`}
                                    type="button"
                                    onClick={() => toggleAnswer(index, itemIndex)}
                                 >
                                    {item.title}
                                    <span className="arrow">
                                       <span></span>
                                    </span>
                                 </button>
                                 {item.showAnswer && (
                                    <div className="accordion-collapse collapse show">
                                       <div className="content accordion-body">{item.desc}</div>
                                    </div>
                                 )}
                              </div>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default FaqArea;
