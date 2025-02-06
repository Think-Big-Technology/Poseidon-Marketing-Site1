import Wrapper from '../layouts/Wrapper';
import Login from '../component/login';
import SEO from '../component/SEO';

const LoginMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Login'} />
         <Login />
      </Wrapper>
   );
};

export default LoginMain;