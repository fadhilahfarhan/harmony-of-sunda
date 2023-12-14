import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Container } from 'react-bootstrap';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
        <Container>
          {children}
        </Container>
      <Footer />
    </div>
  );
}

export default Layout;
