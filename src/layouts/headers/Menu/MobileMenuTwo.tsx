/* eslint-disable @typescript-eslint/no-explicit-any */
import { HashLink as Link } from "react-router-hash-link";
import React, { useEffect, useState } from "react";
import menu_data from "../../../data/MenuData";

interface PropsType {
   setIsActive: (isActive: boolean) => void;
}

const MobileMenusTwo = ({ setIsActive }: PropsType) => {

   const [navTitle, setNavTitle] = useState("");

   const [navClick, setNavClick] = useState<boolean>(false);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [navClick]);

   const closeSidebar = () => {
      setIsActive(false);
   };


   //openMobileMenu
   const openMobileMenu = (menu: any) => {
      if (navTitle === menu) {
         setNavTitle("");
      } else {
         setNavTitle(menu);
      }
   };

   return (
      <>
         <ul id="mobile-menu-active">
            {menu_data.filter((items) => items.page === "home_3").map((menu, i) => (
               <React.Fragment key={i}>
                  {menu.has_dropdown && (
                     <li onClick={() => openMobileMenu(menu.title)} className={`${menu.has_dropdown ? "dropdown" : ""}`}>
                        <Link
                           onClick={() => setNavClick(!navClick)}
                           smooth
                           to={menu.link}
                        >
                           {menu.title}
                        </Link>
                        <div
                           className={`dropdown-btn ${navTitle === menu.title ? "open" : ""}`}
                           onClick={() => openMobileMenu(menu.title)} >
                           <i className={`${navTitle === menu.title ? "fas fa-angle-down" : "fas fa-angle-down"}`}></i>
                        </div>
                        {menu.sub_menus && menu.sub_menus.length > 0 && (
                           <ul className="sub-menu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                              {menu.sub_menus.map((sub, index) => (
                                 <li key={index}>
                                    <Link onClick={() => setNavClick(!navClick)} to={sub.link}>
                                       {sub.title}
                                    </Link>
                                 </li>
                              ))}
                           </ul>
                        )}
                     </li>
                  )}
                  {!menu.has_dropdown && (
                     <li onClick={closeSidebar} >
                        <Link onClick={() => setNavClick(!navClick)} to={menu.link} >
                           {menu.title}
                        </Link>
                     </li>
                  )}
               </React.Fragment>
            ))}
         </ul>
      </>
   );
}

export default MobileMenusTwo;
