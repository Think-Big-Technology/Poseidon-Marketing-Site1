import Wrapper from '../layouts/Wrapper';
import Contact from '../component/contact';
import SEO from '../component/SEO';

const ContactMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Contact'} />
         <Contact />
      </Wrapper>
   );
};

export default ContactMain;