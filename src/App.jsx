import { Routes, Route } from 'react-router-dom';
import ThemeProvider from './context/ThemeContext';
import WishlistProvider from './context/WishlistContext';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';
import About from './pages/About';
import Contact from './pages/Contact';
import Policies from './pages/Policies';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';

function App() {
  return (
    <ThemeProvider>
      <WishlistProvider>
        <>
          {/* Header (optional) */}
          <Header />

          {/* Main navigation */}
          <Navbar />

          {/* Page content */}
          <main className="container py-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:id" element={<SingleProduct />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              {/* Optional 404 fallback */}
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </>
      </WishlistProvider>
    </ThemeProvider>
  );
}

export default App;
``