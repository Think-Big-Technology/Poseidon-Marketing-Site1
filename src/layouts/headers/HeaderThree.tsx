import { Link } from "react-router-dom";;
import { useState } from "react";;
import NavMenuThree from "./Menu/NavMenuThree";
import Sidebar from "./Menu/Sidebar";
import UseSticky from "../../component/hooks/UseSticky";

const HeaderThree = () => {

   const { sticky } = UseSticky();
   const [isActive, setIsActive] = useState<boolean>(false);

   return (
      <>
         <header className="site-header header--transparent ico-header">
            <div className={`header__main-wrap stricky  ${sticky ? "sticky-menu" : ""}`}>
               <div className="container mxw_1640">
                  <div className="header__main ul_li_between">
                     <div className="header__left ul_li">
                        <div className="header__logo">
                           <Link to="/"><img src="/assets/img/logo/logo.svg" alt="" /></Link>
                        </div>
                     </div>
                     <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
                        <nav className="main-menu collapse navbar-collapse">
                           <NavMenuThree />
                        </nav>
                     </div>
                     <div className="header__action ul_li">
                        <div className="d-xl-none">
                           <a onClick={() => setIsActive(true)} className="header__bar hamburger_menu" style={{ cursor: "pointer" }}>
                              <div className="header__bar-icon">
                                 <span></span>
                                 <span></span>
                                 <span></span>
                                 <span></span>
                              </div>
                           </a>
                        </div>
                        <div className="header__account">
                           <Link to="/login"><i className="fas fa-user"></i>LOGIN</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <Sidebar isActive={isActive} setIsActive={setIsActive} style_2={true} />
      </>
   )
}

export default HeaderThree
