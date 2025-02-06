import About from "./About"
import Banner from "./Banner"
import Brand from "./Brand"
import CtaArea from "./CtaArea"
import FaqArea from "./FaqArea"
import Feature from "./Feature"
import Newslatter from "./Newslatter"
import PricingArea from "./PricingArea"
import Product from "./Product"
import Services from "./Services"
import LineShape from "./LineShape"
import HeaderTwo from "../../../layouts/headers/HeaderTwo"
import FooterTwo from "../../../layouts/footers/FooterTwo"

const HomeTwo = () => {
   return (
      <div className="home-bitcoin">
         <LineShape />
         <div className="body_wrap">
            <HeaderTwo />
            <Banner />
            <Brand />
            <PricingArea />
            <Services />
            <Feature />
            <About />
            <Product />
            <FaqArea />
            <CtaArea />
            <Newslatter />
            <FooterTwo />
         </div>
      </div>
   )
}

export default HomeTwo
