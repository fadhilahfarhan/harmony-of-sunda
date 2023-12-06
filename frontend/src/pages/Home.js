import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main";
import Jumbroton from "../components/Jumbroton";

function Home() {
  return (
    <div>
			<Navbar/>
      <Jumbroton />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
