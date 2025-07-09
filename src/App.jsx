import { Routes, Route, useLocation } from 'react-router-dom';
import ContactForm from './pages/ContactForm.jsx';
import Services from './pages/service.jsx';
import NavBar from './comp/nav.jsx';
import Footer from './comp/Footer.jsx';

export default function Page() {
  const location = useLocation();

  // Define pages where Footer should NOT show
  const hideFooterRoutes = ['/']; // You can add more like '/login', '/admin'

  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ContactForm />} />
        <Route path="/services" element={<Services />} />
        {/* Add more routes below if needed */}
      </Routes>
      
      {shouldShowFooter && <Footer />}
    </>
  );
}
