import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout';
import { HomePage } from './pages/HomePage/HomePage';
import { HeadphonesPage } from './pages/HeadphonesPage/HeadphonesPage';

// App Content component to access useLocation hook
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
        <Route path="/speakers" element={<div>Speakers Page Coming Soon</div>} />
        <Route path="/earphones" element={<div>Earphones Page Coming Soon</div>} />
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
