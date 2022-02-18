import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';


const App = () => {
  return (
    <>
      <Header />
      <main className="page py-3">
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
