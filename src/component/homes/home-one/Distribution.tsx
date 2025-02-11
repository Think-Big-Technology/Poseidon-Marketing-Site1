
const Distribution = () => {
   return (
      <section className="token-distribution p-relative z-index-1">
         <div className="container">
            <div className="row align-items-center mt-none-30">
               <div className="col-xl-5 col-lg-6 mt-30">
                  <div className="token-distribution__content pos-rel">
                     <div className="token-distribution__bg"></div>
                     <div className="icon mb-45">
                        <img src="/assets/img/icon/bitcoin_icon.png" alt="" />
                     </div>
                     <div className="sec-title style2 mb-45">
                        <h2 className="sec-title__title text-50 mb-25">Essential For Workplaces. Great For Any Team.</h2>
                        <p className="text-20 text-white mb-55">Poseidon’s powerful features, including seamless project  management, efficient resource allocation, and comprehensive financial  management, help contractors and subcontractors optimize their workflow,  reduce costs, and complete projects on time. By enhancing productivity,  streamlining operations, and maximizing profitability, Poseidon  empowers businesses to achieve greater financial success in the  competitive construction sectors.</p>
                        {/* <p>When a new blockchain project is launched, a specific number of tokens are created, and these tokens are distributed among various stakeholders, including founders.</p> */}
                     </div>
                  </div>
               </div>
               <div className="col-xl-7 col-lg-6 mt-30">
                  <div className="token-distribution__img text-lg-end">
                     <img src="/assets/img/token/token-distribution.png" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Distribution
