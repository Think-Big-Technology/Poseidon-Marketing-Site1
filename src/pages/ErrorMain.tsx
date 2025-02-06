import Wrapper from '../layouts/Wrapper';
import ErrorArea from '../component/error/ErrorArea';
import SEO from '../component/SEO';

const ErrorMain = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Error'} />
      <ErrorArea />
    </Wrapper>
  );
};

export default ErrorMain;