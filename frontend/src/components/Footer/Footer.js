import React from 'react';
import './Footer.css';
import IconFacebook from '../../assets/images/socialMedia/facebook.png';
import IconTwitter from '../../assets/images/socialMedia/twitter.png';
import IconLinkedin from '../../assets/images/socialMedia/linkedin.png';
import IconInstagram from '../../assets/images/socialMedia/instagram.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='sb_footer section__padding'>
        <div className='sb__footer-links'>
          <div className='sb__footer-links_div'>
            <h4>For Business</h4>
            <a href='/about-us'>
              <p>Team</p>
            </a>
            <a href='/healthplan'>
              <p>Health Plan</p>
            </a>
            <a href='/individual'>
              <p>Individual</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Resources</h4>
            <a href='/resource'>
              <p>Frontend</p>
            </a>
            <a href='/resource'>
              <p>Backend</p>
            </a>
            <a href='/resource'>
              <p>Design</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Partners</h4>
            <a href='https://www.dicoding.com/' target='_blank' rel='noreferrer'>
              <p>Dicoding Indonesia</p>
            </a>
            <a href='https://nurulfikri.ac.id/' target='_blank' rel='noreferrer'>
              <p>STT Terpadu Nurul Fikri</p>
            </a>
            <a href='https://www.pnj.ac.id/' target='_blank' rel='noreferrer'>
              <p>Politeknik Negeri Jakarta</p>
            </a>
            <a href='https://www.umn.ac.id/' target='_blank' rel='noreferrer'>
              <p>Universitas Multimedia Nusantara</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Company</h4>
            <a href='/about-us'>
              <p>About</p>
            </a>
            <a href='/about-us'>
              <p>Press</p>
            </a>
            <a href='/about-us'>
              <p>Career</p>
            </a>
            <a href='/about-us'>
              <p>Contact</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Coming Soon on</h4>
            <div className='socialmedia'>
              <p><img src={IconFacebook} alt='icon facebook' /></p>
              <p><img src={IconTwitter} alt='icon twitter' /></p>
              <p><img src={IconLinkedin} alt='icon linkedin' /></p>
              <p><img src={IconInstagram} alt='icon instagram' /></p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className='sb__footer-below'>
          <div className='sb__footer-copyright'>
            <p>
              &copy; {new Date().getFullYear()} Harmony of Sunda. All right reserved.
            </p>
          </div>
          <div className='sb__footer-below-links'>
            <a href='/about-us'><div><p>Terms & Condition</p></div></a>
            <a href='/about-us'><div><p>Privacy</p></div></a>
            <a href='/about-us'><div><p>Security</p></div></a>
            <a href='/about-us'><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;