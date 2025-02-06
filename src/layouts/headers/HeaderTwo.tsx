import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Menu/Sidebar";
import UseSticky from "../../component/hooks/UseSticky";

const HeaderTwo = () => {

   const { sticky } = UseSticky();
   const [isActive, setIsActive] = useState<boolean>(false);

   return (
      <>
         <header className="site-header header--transparent btc-header">
            <div className={`header-area stricky ${sticky ? "sticky-menu" : ""}`}>
               <div className="container">
                  <div className="header-wrap ul_li_between">
                     <Link className="header__logo" to="/"><img src="/assets/img/logo/logo-3.svg" alt="" /></Link>
                     <div className="header__action ul_li">
                        <Link className="login" to="/login"><img src="/assets/img/icon/user.svg" alt="" />LOgin</Link>
                        <a onClick={() => setIsActive(true)} style={{ cursor: "pointer" }} className="header__bar hamburger_menu">
                           <div className="header__bar-icon">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <Sidebar isActive={isActive} setIsActive={setIsActive} style_1={true} Sidebar="slide-bar-bitcoin" />
      </>
   )
}

export default HeaderTwo
