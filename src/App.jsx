import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import ContactForm from './pages/ContactForm.jsx';
import Services from './pages/service.jsx';
import Footer from './comp/Footer.jsx';
import ServicesBF from './pages/services-bf.jsx';
import MainPage from './pages/main.jsx';
import BeforeAfterCarousel from './pages/Beforeandafter.jsx';
import './i18n';

// ScrollToTop component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function Page() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/servicesBF" element={<ServicesBF />} />
        <Route path="/beforeandafter" element={<BeforeAfterCarousel />} />
        <Route path="/realisations" element={<BeforeAfterCarousel />} />
        <Route path="/about" element={<ServicesBF />} />
        <Route path="/accueil" element={<MainPage />} />
        <Route path="/nos-services" element={<Services />} />
        <Route path="/a-propos" element={<ServicesBF />} />
        <Route path="/nos-realisations" element={<BeforeAfterCarousel />} />
        <Route path="/contactez-nous" element={<ContactForm />} />
        
        {/* Redirect old routes to new ones */}
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/service" element={<Navigate to="/services" replace />} />
        
        {/* 404 route - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}
