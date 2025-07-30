import { Routes, Route, useLocation } from 'react-router-dom';
import ContactForm from './pages/ContactForm.jsx';
import Services from './pages/service.jsx';
import NavBar from './comp/nav.jsx';
import Footer from './comp/Footer.jsx';
import ServicesBF from './pages/services-bf.jsx';
import MainPage from './pages/main.jsx';
import BeforeAfterCarousel from './pages/Beforeandafter.jsx';

export default function Page() {
  const location = useLocation();

  // Pages where NavBar or Footer shouldn't show
  const hideFooterRoutes = ['/contact'];
  const hideNavRoutes = ['/'];

  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);
  const shouldShowNav = !hideNavRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNav && <NavBar />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/servicesBF" element={<ServicesBF />} />
        <Route path="/beforeandafter" element={<BeforeAfterCarousel />} />
      </Routes>
      {shouldShowFooter && <Footer />}
    </>
  );
}
