import Wrapper from '../layouts/Wrapper';
import HomeTwo from '../component/homes/home-two';
import SEO from '../component/SEO';

const HomeTwoMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Home Two'} />
         <HomeTwo />
      </Wrapper>
   );
};

export default HomeTwoMain;