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
            <a href="/#">Alat Musik</a>
            <a href="/#">Lagu Daerah</a>
            <a href="/#">Tarian Tradisional</a>
            <a href="/#">Baju Adat</a>
            <a href="/#">Rumah Adat</a>
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