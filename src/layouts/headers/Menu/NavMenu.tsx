/* eslint-disable @typescript-eslint/no-explicit-any */
import { HashLink as Link } from "react-router-hash-link";
import menu_data from "../../../data/MenuData";
import { useEffect, useState } from "react";

const NavMenu = () => {

    const [navClick, setNavClick] = useState<boolean>(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [navClick]);

    return (
        <ul>
            {menu_data.filter((items) => items.page === "home_1").map((menu: any) => (
                <li key={menu.id}
                    className={`${menu.has_dropdown ? "menu-item-has-children" : ""} ${menu.mega_menu ? "has-mega-menu" : ""}`}
                >
                    <Link
                        onClick={() => setNavClick(!navClick)}
                        smooth
                        to={menu.link}
                    >
                        {menu.title}
                    </Link>


                    {menu.mega_menu && (
                        <>
                            {menu.mega_menu && (
                                <ul className="submenu mega-menu">
                                    <li>
                                        <div className="mega-menu-content mxw_1505">
                                            <div className="row">
                                                {menu.sub_menus.map((sub_m: any, i: any) => (
                                                    <div key={i} className="col col-md-3">
                                                        <div className="demo-pic">
                                                            <Link onClick={() => setNavClick(!navClick)} to={sub_m.link}>
                                                                <img src={sub_m.demo_pic} alt="" />
                                                            </Link>
                                                        </div>
                                                        <h3>{sub_m.title}</h3>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            )}
                        </>
                    )}

                    {menu.has_dropdown && (
                        <>
                            {menu.sub_menus && (
                                menu.mega_menu ? (
                                    <ul className="submenu mega-menu">
                                        <li>
                                            <div className="mega-menu-content mxw_1505">
                                                <div className="row">
                                                    {menu.sub_menus.map((sub_m: any, i: any) => (
                                                        <div key={i} className="col col-md-3">
                                                            <div className="demo-pic">
                                                                <Link onClick={() => setNavClick(!navClick)} to={sub_m.link}>
                                                                    <img src={sub_m.demo_pic} alt="" />
                                                                </Link>
                                                            </div>
                                                            <h3>{sub_m.title}</h3>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                ) : (
                                    <ul className="submenu">
                                        {menu.sub_menus.map((sub_m: any, i: any) => (
                                            <li key={i}>
                                                <Link onClick={() => setNavClick(!navClick)}
                                                    to={sub_m.link}>
                                                    {sub_m.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )
                            )}
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NavMenu;

