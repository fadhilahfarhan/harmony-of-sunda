import { Container, Row } from 'react-bootstrap';
import Jaipong from '../../assets/images/main/Jaipong.jpeg';
import Angklung from '../../assets/images/main/Angklung.jpeg';
import Song from '../../assets/images/main/Song.jpeg';
import bajuAdat from '../../assets/images/main/bajuAdat.jpg';
import rumahAdat from '../../assets/images/main/RumahAdat.jpg';
import styles from './Categories.module.css';
import Category from '../Category/Category';

const Categories = () => {
  return (
    <>
      <div className={styles.about__sunda}>
        <h1 className='text-center mt-4'>Tentang Suku Sunda</h1>
        <p className='text-center'>
          Jawa Barat dikenal sebagai tanah Parahiangan yang kaya dengan keindahan alam dan pesona budayanya. 
          Suku sunda merupakan bentuk keberadaan suku yang mendiami daerah tersebut. 
          Seiring berkembangnya zaman kesenian suku Sunda banyak sekali terancam punah,
          sebagian besar tidak mengetahui kesenian tersebut, di antaranya:
        </p>
      </div>
      <Container>
        <Row className='mb-3'>
          <Category
            page='music-traditional'
            srcImage={Song}
            category='Musik Sunda'
            categoryText='Lagu daerah Jawa Barat pun jarang sekali diputar bahkan hanya sebagian yang mengetahui.'
          />
          <Category
            page='musical-instrument'
            srcImage={Angklung}
            category='Alat Musik Sunda'
            categoryText='Seringkali diakui negara lain padahal merupakan alat musik dari Indonesia daerah Jawa Barat.'
          />
          <Category
            page='dance-traditional'
            srcImage={Jaipong}
            category='Tarian Sunda'
            categoryText='Banyak sekali tari tradisional asal Jawa Barat yang jarang sekali diketahui oleh sebagian besar gen Z.'
          />
        </Row>

        <Row className={`${styles.rowBottom} mb-3`}>
          <Category
            page='house-traditional'
            srcImage={rumahAdat}
            category='Rumah Tradisional Sunda'
            categoryText='Rumah adat di Jawa Barat memiliki sejumlah permasalahan menjadi terlupakan.'
          />
          <Category
            page='attire-traditional'
            srcImage={bajuAdat}
            category='Pakaian Adat Sunda'
            categoryText='Permasalahan terkait baju adat di Jawa Barat juga dapat menjadi fokus pelestarian budaya'
          />
        </Row>
      </Container>
    </>
  );
}

export default Categories;