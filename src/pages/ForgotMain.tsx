import Wrapper from '../layouts/Wrapper';
import ForgotPassword from '../component/reset-password';
import SEO from '../component/SEO';

const ForgotPasswordMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Forgot Password'} />
         <ForgotPassword />
      </Wrapper>
   );
};

export default ForgotPasswordMain;