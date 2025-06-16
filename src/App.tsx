import { useState } from 'react';
import { Layout } from './components/layout';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  const [cartItemCount] = useState(0);

  const handleCartClick = () => {
    console.log('Cart clicked'); // Will open cart modal later
  };

  return (
    <Layout 
      cartItemCount={cartItemCount}
      currentPath="/"
      onCartClick={handleCartClick}
    >
      <HomePage />
    </Layout>
  );
}

export default App;
