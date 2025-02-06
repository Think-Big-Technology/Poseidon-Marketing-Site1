import { useEffect, useState } from "react";

interface faqItem {
  id: number;
  title: string;
  desc: JSX.Element;
  showAnswer: boolean;
};

const faq_data: faqItem[] = [
  {
    id: 1,
    showAnswer: false,
    title: "What is Blockchain?",
    desc: (<>Blockchain uses consensus mechanisms, such as Proof of Work (PoW) or Proof of Stake (PoS), to validate and agree on the state of the <br /> network. These mechanisms require participants (nodes or validators) to solve complex mathematical puzzles or stake cryptocurrency to <br /> participate in the consensus process</>),
  },
  {
    id: 2,
    showAnswer: false,
    title: "How is Blockchain Secure?",
    desc: (<>Blockchain uses consensus mechanisms, such as Proof of Work (PoW) or Proof of Stake (PoS), to validate and agree on the state of the <br /> network. These mechanisms require participants (nodes or validators) to solve complex mathematical puzzles or stake cryptocurrency to <br /> participate in the consensus process</>),
  },
  {
    id: 3,
    showAnswer: false,
    title: "What is the Difference Between Public and Private Blockchains?",
    desc: (<>Blockchain uses consensus mechanisms, such as Proof of Work (PoW) or Proof of Stake (PoS), to validate and agree on the state of the <br /> network. These mechanisms require participants (nodes or validators) to solve complex mathematical puzzles or stake cryptocurrency to <br /> participate in the consensus process</>),
  },
  {
    id: 4,
    showAnswer: false,
    title: "How Can I Get Started with Blockchain?",
    desc: (<>Blockchain uses consensus mechanisms, such as Proof of Work (PoW) or Proof of Stake (PoS), to validate and agree on the state of the <br /> network. These mechanisms require participants (nodes or validators) to solve complex mathematical puzzles or stake cryptocurrency to <br /> participate in the consensus process</>),
  },
  {
    id: 5,
    showAnswer: false,
    title: "What Are Some Real-World Use Cases of Blockchain?",
    desc: (<>Blockchain uses consensus mechanisms, such as Proof of Work (PoW) or Proof of Stake (PoS), to validate and agree on the state of the <br /> network. These mechanisms require participants (nodes or validators) to solve complex mathematical puzzles or stake cryptocurrency to <br /> participate in the consensus process</>),
  },
]

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
    <section className="faq pb-75">
      <div className="container">
        <div className="sec-title style2 text-center mb-40">
          <h2 className="sec-title__title text-50 mb-25">Frequently Asked Questions</h2>
          <p>Have questions? We have answers!</p>
        </div>
        <div className="faq__blockchain">
          <div className="accordion_box clearfix accordion" id="accordionOne">
            {faqData.map((item, index) => (
              <div key={item.id} className={`block accordion-item  ${item.showAnswer ? "active" : ""} `}>
                <button
                  className={`acc-btn accordion-button  ${item.showAnswer ? "" : "collapsed"}`}
                  type="button" onClick={() => toggleAnswer(index)}
                >
                  {item.title}
                  <span className="arrow"><span></span></span>
                </button>
                {item.showAnswer && (
                  <div id="collapseOne" className="accordion-collapse collapse show">
                    <div className="content accordion-body">{item.desc}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqArea
