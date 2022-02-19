import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="page py-3">
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="*" element={<h1>404 - Page not found</h1>} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
