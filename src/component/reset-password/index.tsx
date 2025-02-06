import FooterThree from "../../layouts/footers/FooterThree"
import HeaderThree from "../../layouts/headers/HeaderThree"
import Breadcrumb from "../common/Breadcrumb"
import ForgotForm from "../forms/ForgotForm"
import ContactForm from "../homes/home-three/ContactForm"

const ResetPassWord = () => {
   return (
      <main>
         <HeaderThree />
         <Breadcrumb title="Reset PassWord" page_title="Reset PassWord" />
         <ForgotForm />
         <ContactForm />
         <FooterThree />
      </main>
   )
}

export default ResetPassWord
