/* eslint-disable @typescript-eslint/no-explicit-any */
import Wrapper from '../layouts/Wrapper';
import SEO from '../component/SEO';
import Breadcrumb from '../component/common/Breadcrumb';
import BlogDetailsArea from '../component/blogs/blog-details/BlogDetailsArea';
import { useParams } from 'react-router-dom';
import HeaderThree from '../layouts/headers/HeaderThree';
import FooterThree from '../layouts/footers/FooterThree';
import useBlogs from '../component/hooks/useBlog';
import ContactForm from '../component/homes/home-three/ContactForm';

const DynamicBlogDeatils = () => {

   const { id } = useParams();
   const { blogs } = useBlogs();
   const blog = blogs.find(blog => Number(blog.id) === Number(id));
   return (
      <Wrapper>
         <SEO pageTitle={'Blog Deatils Coindox'} />
         <HeaderThree />
         <Breadcrumb title="Blog single Page" page_title="Blog single Page" />
         <BlogDetailsArea single_blog={blog} />
         <ContactForm />
         <FooterThree />
      </Wrapper>
   );
};

export default DynamicBlogDeatils;