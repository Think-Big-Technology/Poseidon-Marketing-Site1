import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface faqItem {
   id: number;
   showAnswer: boolean;
   title: string;
   desc_1: JSX.Element
   list: string[];
   desc_2: JSX.Element
};

const faq_data: faqItem[] = [
   {
      id: 1,
      showAnswer: false,
      title: "How is the ICO project different from other blockchain ventures?",
      desc_1: (<>The cost of artificial intelligence in software development is determined by many factors:</>),
      list: ["Scale of the project", "Set of technologies involved", "Number of development hours"],
      desc_2: (<>Our team assists you in every possible way, balancing the cost and quality of
         your product for maximum satisfaction. <br />
         To get a concrete assessment of your future AI solution, <Link
            to="#">Contact us</Link> and we will quickly provide you with all the
         information you need.</>),
   },
   {
      id: 2,
      showAnswer: false,
      title: "What security measures are in place to protect ICO participants' investments an participate in the ICO?",
      desc_1: (<>The cost of artificial intelligence in software development is determined by many factors:</>),
      list: ["Scale of the project", "Set of technologies involved", "Number of development hours"],
      desc_2: (<>Our team assists you in every possible way, balancing the cost and quality of
         your product for maximum satisfaction. <br />
         To get a concrete assessment of your future AI solution, <Link
            to="#">Contact us</Link> and we will quickly provide you with all the
         information you need.</>),
   },
   {
      id: 3,
      showAnswer: false,
      title: "What is the purpose and vision behind this ICO project?",
      desc_1: (<>The cost of artificial intelligence in software development is determined by many factors:</>),
      list: ["Scale of the project", "Set of technologies involved", "Number of development hours"],
      desc_2: (<>Our team assists you in every possible way, balancing the cost and quality of
         your product for maximum satisfaction. <br />
         To get a concrete assessment of your future AI solution, <Link
            to="#">Contact us</Link> and we will quickly provide you with all the
         information you need.</>),
   },
   {
      id: 4,
      showAnswer: false,
      title: "What security measures are in place to protect ICO participants' investments an participate in the ICO?",
      desc_1: (<>The cost of artificial intelligence in software development is determined by many factors:</>),
      list: ["Scale of the project", "Set of technologies involved", "Number of development hours"],
      desc_2: (<>Our team assists you in every possible way, balancing the cost and quality of
         your product for maximum satisfaction. <br />
         To get a concrete assessment of your future AI solution, <Link
            to="#">Contact us</Link> and we will quickly provide you with all the
         information you need.</>),
   },
   {
      id: 5,
      showAnswer: false,
      title: "How can I secure and store my purchased ICO tokens?",
      desc_1: (<>The cost of artificial intelligence in software development is determined by many factors:</>),
      list: ["Scale of the project", "Set of technologies involved", "Number of development hours"],
      desc_2: (<>Our team assists you in every possible way, balancing the cost and quality of
         your product for maximum satisfaction. <br />
         To get a concrete assessment of your future AI solution, <Link
            to="#">Contact us</Link> and we will quickly provide you with all the
         information you need.</>),
   },
];

const FaqArea = () => {

   const filteredFaqData = faq_data;

   const [faqData, setFaqData] = useState<faqItem[]>([]);

   useEffect(() => {
      const initialFaqData: faqItem[] = filteredFaqData.map((faq, index) => ({
         ...faq,
         showAnswer: index === 0,
      }));
      setFaqData(initialFaqData);
   }, []);

   const toggleAnswer = (index: number) => {
      setFaqData((prevFaqData) => {
         const updatedFaqData = prevFaqData.map((faq, i) => ({
            ...faq,
            showAnswer: i === index ? !faq.showAnswer : false,
         }));
         return updatedFaqData;
      });
   };

   return (
      <section className="faq pos-rel pt-140 pb-105">
         <div className="container">
            <div className="sec-title text-center mb-35">
               <h5 className="sec-title__subtitle">FAQ</h5>
               <h2 className="sec-title__title">Frequently asked questions</h2>
            </div>
            <div className="faq__wrap">
               <div className="accordion_box clearfix" id="accordionThree">
                  {faqData.map((item, index) => (
                     <div key={item.id} className={`block accordion-item  ${item.showAnswer ? "active-block" : ""} `} id={`heading${item.id}`}>
                        <button
                           className={`acc-btn accordion-button  ${item.showAnswer ? "" : "collapsed"}`}
                           type="button" onClick={() => toggleAnswer(index)}
                        >
                           <span>QA : 0{item.id}</span>
                           {item.title}
                        </button>
                        {item.showAnswer && (
                           <div id={`collapse${item.id}`} className="accordion-collapse collapse show">
                              <div className="content accordion-body">
                                 <p>{item.desc_1}</p>
                                 <ul>
                                    {item.list.map((item, i) => (
                                       <li key={i}>{item}</li>
                                    ))}
                                 </ul>
                                 <p>{item.desc_2}</p>
                              </div>
                           </div>
                        )}
                     </div>
                  ))}
               </div>
            </div>
         </div>
         <div className="faq__sec-shape">
            <div className="shape shape--1">
               <img src="/assets/img/shape/s_shape1.png" alt="" />
            </div>
            <div className="shape shape--2">
               <img src="/assets/img/shape/s_shape2.png" alt="" />
            </div>
         </div>
      </section>
   )
}

export default FaqArea
