import FooterThree from "../../layouts/footers/FooterThree"
import HeaderThree from "../../layouts/headers/HeaderThree"
import Breadcrumb from "../common/Breadcrumb"
import ContactForm from "../homes/home-three/ContactForm"
import ContactArea from "./ContactArea"

const Contact = () => {
   return (
      <>
         <HeaderThree />
         <Breadcrumb title="Get in touch" page_title="Contact us" />
         <ContactArea />
         <ContactForm />
         <FooterThree />
      </>
   )
}

export default Contact
