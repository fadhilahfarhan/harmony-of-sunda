import { Container, Row, Col } from 'react-bootstrap';
import styles from './Header.module.css';

const Header = (props) => {
  const { titleArticle, descriptionArticle, altPicture, srcPicture } = props;

  return (
    <>
      <Container style={{background: '#ECECEC', borderRadius: '20px'}}>
        <Row className='mt-4 p-4'>
          <Col md={6} className={`${styles.colLeft} my-auto`}>
            <h3 className={styles.headline__instrument}>{titleArticle}</h3>
            <p className={styles.paragraf__instrument}>{descriptionArticle}</p>
          </Col>
          <Col md={6} className={`${styles.colRight} text-center my-auto`}>
            <img src={srcPicture} alt={altPicture} className='mx-auto'/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;