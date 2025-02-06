import { Link } from "react-router-dom";;
import { useState } from "react";;
import NavMenu from "./Menu/NavMenu";
import Sidebar from "./Menu/Sidebar";
import UseSticky from "../../component/hooks/UseSticky";

const Header = () => {

    const { sticky } = UseSticky();
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <>
            <header className="site-header header--transparent blockchain-header" id="header">
                <div id="sticky-header" className={`header__main-wrap stricky ${sticky ? "sticky-menu" : ""}`}>
                    <div className="container-fluid">
                        <div className="header__main ul_li_between">
                            <div className="header__left ul_li">
                                <div className="header__logo">
                                    <Link to="/"><img src="/assets/img/logo/logo-2.svg" alt="" /></Link>
                                </div>
                            </div>
                            <div className="main-menu__wrap ul_li navbar navbar-expand-lg">
                                <nav className="main-menu collapse navbar-collapse">
                                    <NavMenu />
                                </nav>
                            </div>

                            <div className="header__action ul_li">
                                <div className="d-lg-none">
                                    <a onClick={() => setIsActive(true)} className="header__bar hamburger_menu" style={{ cursor: "pointer" }}>
                                        <div className="header__bar-icon">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="blockchain-header__account">
                                    <Link className="blc-btn" to="/login"><span><i className="fas fa-user"></i>LOGIN</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Sidebar isActive={isActive} setIsActive={setIsActive} Sidebar="slide-bar-blockchain" />
        </>
    );
}

export default Header;
