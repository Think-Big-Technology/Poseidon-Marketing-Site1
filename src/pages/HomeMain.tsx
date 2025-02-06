import Wrapper from '../layouts/Wrapper';
import HomeOneMain from '../component/homes/home-one';
import SEO from '../component/SEO';

const Home = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Home One'} />
         <HomeOneMain />
      </Wrapper>
   );
};

export default Home;