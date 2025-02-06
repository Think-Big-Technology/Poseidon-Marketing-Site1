import Wrapper from '../layouts/Wrapper';
import Register from '../component/register';
import SEO from '../component/SEO';

const RegisterMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Register'} />
         <Register />
      </Wrapper>
   );
};

export default RegisterMain;