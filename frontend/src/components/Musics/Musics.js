import Music from '../Music/Music';
import { Container, Row } from 'react-bootstrap';
import styles from './Musics.module.css';

const Musics = (props) => {
  const { title } = props;

  return (
    <>
      <h1 className='text-center mt-5'>{title}</h1>
      <Container className={styles.container}>
        <Row>
            <Music />
          </Row>
      </Container>
    </>
  );
}

export default Musics;