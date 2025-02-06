import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomeMain from '../pages/HomeMain';
import HomeTwoMain from '../pages/HomeTwoMain';
import HomeThreeMain from '../pages/HomeThreeMain';
import BlogMain from '../pages/BlogMain';
import BlogDetailsMain from '../pages/BlogDetailsMain';
import DynamicBlogDeatilsMain from '../pages/DynamicBlogDeatilsMain';
import ContactMain from '../pages/ContactMain';
import LoginMain from '../pages/LoginMain';
import RegisterMain from '../pages/RegisterMain';
import ForgotPasswordMain from '../pages/ForgotMain';
import ErrorMain from '../pages/ErrorMain';

const AppNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/home-two" element={<HomeTwoMain />} />
        <Route path="/home-three" element={<HomeThreeMain />} />
        <Route path="/blog" element={<BlogMain />} />
        <Route path="/blog-single" element={<BlogDetailsMain />} />
        <Route path="/blog-single/:id" element={<DynamicBlogDeatilsMain />} />
        <Route path="/contact" element={<ContactMain />} />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/register" element={<RegisterMain />} />
        <Route path="/forgot" element={<ForgotPasswordMain />} />
        <Route path="*" element={<ErrorMain />} />
      </Routes>
    </Router>
  );
};

export default AppNavigation;
