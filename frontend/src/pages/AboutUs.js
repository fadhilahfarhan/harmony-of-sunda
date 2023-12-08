import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import About from "../components/AboutUs/About";


const AboutUs = () => {
    return (
        <div>
            <Navbar />

            <h4 className="text-center mt-3">About Us</h4>
            <h1 className="text-center">"HARMONY OF SUNDA"</h1>

            <About />


            <Footer />
        </div>
    )
}

export default AboutUs;