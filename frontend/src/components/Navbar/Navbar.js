import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navRef = useRef();
  const [isArtDropdownOpen, setArtDropdownOpen] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const toggleArtDropdown = () => {
    setArtDropdownOpen(!isArtDropdownOpen);
  };

  return (
      <header>
        <h3>Harmony of Sunda</h3>
			<nav ref={navRef}>
      <Link to="/">Home</Link>
				<div className={`dropdown ${isArtDropdownOpen ? "active" : ""}`}>
          <button className="dropbtn" onClick={toggleArtDropdown}>
            Art
          </button>
          <div className="dropdown-content">
            <Link to="/art/musical-instrument">Alat Musik</Link>
            <Link to="/art/music-traditional">Lagu Daerah</Link>
            <Link to="/art/dance-traditional">Tarian Tradisional</Link>
            <Link to="/art/attire-traditional">Baju Adat</Link>
            <Link to="/art/house-traditional">Rumah Adat</Link>
          </div>
        </div>
        <Link to="/about-us">About Us</Link>
				<button className="nav-btn nav-close-btn" onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
      </header>
  );
}

export default Navbar;