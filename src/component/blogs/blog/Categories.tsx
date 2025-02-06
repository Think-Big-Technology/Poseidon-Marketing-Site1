import { Link } from "react-router-dom";

const Categories = () => {
   return (
      <div className="widget mt-30">
         <h3 className="widget__title">Categories</h3>
         <ul className="widget__category list-unstyled">
            <li><Link to="#">Blockchain <span>05</span></Link></li>
            <li><Link to="#">Web Development <span>03</span></Link></li>
            <li><Link to="#">Cryptocurrency <span>06</span></Link></li>
            <li><Link to="#">Branding Design <span>05</span></Link></li>
            <li><Link to="#">Uncategorized <span>02</span></Link></li>
            <li><Link to="#">UI/UX Design <span>04</span></Link></li>
            <li><Link to="#">Email Marketing <span>05</span></Link></li>
         </ul>
      </div>
   )
}

export default Categories
