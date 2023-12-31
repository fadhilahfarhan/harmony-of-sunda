import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './Jumbotron.module.css';
import Pengantin from '../../assets/images/main/pengantin.jpg';
import Pangandaran from '../../assets/images/main/Pangandaran.jpg';
import Rusa from '../../assets/images/main/rusa.jpg';

const Jumbotron = () => {
  return (
    <div>
      <h1 className={`${styles.headline} text-center mt-3`}>'HARMONY OF SUNDA'</h1>
      <p className={`${styles.greyP} text-center`}>Mengenalkan budaya Sunda secara mendalam, meriah, dan melestarikan warisan.</p>

      <Carousel style={{ width: '100%', margin: 'auto' }}>
        <Carousel.Item interval={1000}>
          <img
            className={`${styles.carouselImg} d-block w-100`}
            src={Pangandaran}
            alt='first slide' 
          />
          <Carousel.Caption>
            <h3>Pantai Pangandaran, Jawa Barat</h3>
            <p>kombinasi keindahan alam dengan pasir putih, ombak yang memikat, dan hutan mangrove yang menawan</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img
            className={`${styles.carouselImg} d-block w-100`}
            src={Pengantin}
            alt='second slide' 
          />
          <Carousel.Caption>
            <h3>Baju Pernikahan Suku Sunda</h3>
            <p>Mahkota tradisional suku Sunda, terbuat dari kuningan, dipakai di kepala dengan hiasan warna cerah, simbol keanggunan.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className={`${styles.carouselImg} d-block w-100`}
            src={Rusa}
            alt='third slide' 
          />
          <Carousel.Caption>
            <h3>Hewan Rusa</h3>
            <p>Makhluk elegan di Jawa Barat, sering ditemui di hutan dan taman nasional. Dikenal dengan tanduknya yang indah, rusa menjadi simbol keanggunan alam.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Jumbotron;