import { Container, Row, Col } from 'react-bootstrap';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <Container>
                <Row className='mt-5'>
                    <Col md={6} className={styles.colLeft}>
                        <h3 className={styles.headline__instrument}>Penjelajahan Melalui Ragam Alat Musik Tradisional Sunda</h3>
                        <p className={styles.paragraf__instrument}>
                        Setiap alat musik menciptakan sebuah cerita unik tentang budaya Sunda yang kaya, 
                        memberikan kita wawasan mendalam tentang bagaimana masyarakat setempat mengartikan 
                        keindahan dalam getaran-getaran yang diciptakan oleh kacapi yang mendayu, calung yang 
                        lembut, dan angklung yang riang. Di sini, kita akan memperdalam pemahaman tentang peran 
                        setiap alat musik dalam konteks tradisional Sunda, membuka tirai tentang bagaimana mereka 
                        menjadi penjaga kearifan lokal yang tak ternilai. Mari kita bersama-sama meresapi keindahan 
                        yang terkandung dalam getaran dan harmoni alat musik tradisional Sunda. Dengan beragam informasi 
                        mendalam dan multimedia yang menarik, website ini bukan hanya menjadi sumber referensi, melainkan 
                        juga teman setia dalam eksplorasi Anda menuju dunia yang ajaib dan sarat makna ini.
                        </p>
                    </Col>
                    <Col md={6} className={`${styles.colRight} text-center my-auto`}>
                        <img src='https://images.pexels.com/photos/4473409/pexels-photo-4473409.jpeg' alt='foto bermain alat musik' className='mx-auto'/>
                    </Col>
                </Row>
            </Container>
    </>
  );
}

export default Header;