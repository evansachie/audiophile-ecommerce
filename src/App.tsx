import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout';
import { HomePage } from './pages/HomePage/HomePage';
import { HeadphonesPage } from './pages/HeadphonesPage/HeadphonesPage';
import { SpeakersPage } from './pages/SpeakersPage/SpeakersPage';
import { EarphonesPage } from './pages/EarphonesPage/EarphonesPage';
import { ProductDetailPage } from './pages/ProductDetailPage/ProductDetailPage';

const AppContent = () => {
  const [cartItemCount] = useState(0);
  const location = useLocation();

  const handleCartClick = () => {
    console.log('Cart clicked');
  };

  return (
    <Layout 
      cartItemCount={cartItemCount}
      currentPath={location.pathname}
      onCartClick={handleCartClick}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/headphones" element={<HeadphonesPage />} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/earphones" element={<EarphonesPage />} />
        <Route path="/product/:slug" element={<ProductDetailPage />} />
      </Routes>
    </Layout>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
