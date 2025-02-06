import Wrapper from '../layouts/Wrapper';
import HomeThree from '../component/homes/home-three';
import SEO from '../component/SEO';

const HomeThreeMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Home Three'} />
         <HomeThree />
      </Wrapper>
   );
};

export default HomeThreeMain;