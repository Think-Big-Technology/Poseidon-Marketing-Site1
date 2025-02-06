import FooterThree from "../../layouts/footers/FooterThree"
import HeaderThree from "../../layouts/headers/HeaderThree"
import Breadcrumb from "../common/Breadcrumb"
import LogingArea from "../common/LoginArea"
import ContactForm from "../homes/home-three/ContactForm"

const Register = () => {
   return (
      <main>
         <HeaderThree />
         <Breadcrumb title="Register" page_title="Register" />
         <LogingArea style={true} />
         <ContactForm />
         <FooterThree />
      </main>
   )
}

export default Register
