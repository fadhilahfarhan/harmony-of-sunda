import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>
        {/* <Container>
          {children}
        </Container> */}
        <h1>Main content</h1>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
