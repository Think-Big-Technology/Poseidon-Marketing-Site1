import Wrapper from '../layouts/Wrapper';
import BlogDetails from '../component/blogs/blog-details';
import SEO from '../component/SEO';

const BlogDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Blog Details'} />
         <BlogDetails />
      </Wrapper>
   );
};

export default BlogDetailsMain;