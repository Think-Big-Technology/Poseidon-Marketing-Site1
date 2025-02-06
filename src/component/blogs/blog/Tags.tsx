import { Link } from "react-router-dom";

const Tags = () => {
   return (
      <>
         <div className="widget mt-30">
            <h3 className="widget__title">Follow Us</h3>
            <ul className="widget__social ul_li">
               <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
               <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
               <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
               <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
               <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
            </ul>
            <div className="widget__divider mt-40 mb-40"></div>
            <Link className="thm-btn" to="#">PURCHASE TOKEN</Link>
         </div>
         <div className="widget mt-30">
            <h3 className="widget__title">Tags</h3>
            <div className="tagcloud">
               <Link to="#">ICO</Link>
               <Link to="#">blockchain</Link>
               <Link to="#">investments</Link>
               <Link to="#">currency</Link>
               <Link to="#">crypto trading</Link>
               <Link to="#">crypto</Link>
               <Link to="#">ico blockchain</Link>
               <Link to="#">advisor</Link>
               <Link to="#">web</Link>
               <Link to="#">ICO Tokens</Link>
            </div>
         </div>
      </>
   )
}

export default Tags
