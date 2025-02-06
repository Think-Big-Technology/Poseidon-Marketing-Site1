import FooterThree from "../../../layouts/footers/FooterThree"
import HeaderThree from "../../../layouts/headers/HeaderThree"
import Breadcrumb from "../../common/Breadcrumb"
import ContactForm from "../../homes/home-three/ContactForm"
import BlogArea from "./BlogArea"

const Blog = () => {
   return (
      <>
         <HeaderThree />
         <Breadcrumb title="Blog & Article" page_title="Blog & Article" />
         <BlogArea />
         <ContactForm />
         <FooterThree />
      </>
   )
}

export default Blog
