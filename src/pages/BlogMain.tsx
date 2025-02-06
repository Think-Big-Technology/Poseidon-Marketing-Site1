import Wrapper from '../layouts/Wrapper';
import Blog from '../component/blogs/blog';
import SEO from '../component/SEO';

const BlogMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Blog'} />
         <Blog />
      </Wrapper>
   );
};

export default BlogMain;