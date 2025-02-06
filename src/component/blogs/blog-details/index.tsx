import FooterThree from "../../../layouts/footers/FooterThree"
import HeaderThree from "../../../layouts/headers/HeaderThree"
import Breadcrumb from "../../common/Breadcrumb"
import ContactForm from "../../homes/home-three/ContactForm"
import BlogDetailsArea from "./BlogDetailsArea"

const BlogDetails = () => {
   return (
      <>
         <HeaderThree />
         <Breadcrumb title="Blog single Page" page_title="Blog single Page" />
         <BlogDetailsArea />
         <ContactForm />
         <FooterThree />
      </>
   )
}

export default BlogDetails
