import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import Jaipong from "../../assets/images/main/Jaipong.jpeg";
import Angklung from "../../assets/images/main/Angklung.jpeg";
import Song from "../../assets/images/main/Song.jpeg";
import bajuAdat from "../../assets/images/main/bajuAdat.jpg";
import rumahAdat from "../../assets/images/main/RumahAdat.jpg";

import './Categories.css';

const Categories = () => {
  return (
    <>
      <div className='about-sunda'>
        <h1 className="text-center mt-4">Tentang Suku Sunda</h1>
        <p className="text-center">
          Jawa Barat dikenal sebagai tanah Parahiangan yang kaya dengan keindahan alam dan
          pesona budayanya. Suku sunda merupakan bentuk keberadaan suku yang mendiami daerah
          tersebut. Seiring berkembangnya zaman kesenian suku sunda banyak sekali terancam punah,
          sebagian besar tidak mengetahui kesenian tersebut di antaranya :
        </p>
      </div>
      <Container>
        <Row className='mb-3'>
          <Col md={4} className='d-flex justify-content-center mb-3'>
            <Card style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} shadow="true">
              <Card.Img variant="top" src={Song} />
              <Card.Body>
                <Card.Title style={{color: '#59A3FF', fontWeight: 'bold'}}>Music</Card.Title>
                <Card.Text style={{ fontWeight: '400', color: 'grey', fontSize:'14px'}}>
                Lagu daerah jawa barat pun jarang sekali diputar bahkan hanya sebagian yang mengetahui.
                </Card.Text>
                <Button href='/art/music-traditional' variant="primary">See More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className='d-flex justify-content-center mb-3'>
            <Card style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} shadow="true">
                <Card.Img variant="top" src={Angklung} />
                <Card.Body>
                  <Card.Title style={{color: '#59A3FF', fontWeight: 'bold'}}>Musical Instrument</Card.Title>
                  <Card.Text style={{ fontWeight: '400', color: 'grey', fontSize:'14px'}}>
                  Seringkali di akui negara lain padahal merupakan alat musik dari indonesia daerah jawa barat.
                  </Card.Text>
                  <Button href='/art/musical-instrument' variant="primary">See More</Button>
                </Card.Body>
              </Card>
          </Col>

          <Col md={4} className='d-flex justify-content-center mb-3'>
            <Card style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} shadow="true">
                <Card.Img variant="top" src={Jaipong} />
                <Card.Body>
                  <Card.Title style={{color: '#59A3FF', fontWeight: 'bold'}}>Dance</Card.Title>
                  <Card.Text style={{ fontWeight: '400', color: 'grey', fontSize:'14px'}}>
                  Banyak sekali tari tradisional asal jawa barat yang jarang sekali di ketahui oleh sebagian besar gen z
                  </Card.Text>
                  <Button href='/art/dance-traditional' variant="primary">See More</Button>
                </Card.Body>
              </Card>
          </Col>
        </Row>

        <Row className='mb-3'>
        <Col md={6} className='d-flex justify-content-center mb-3'>
            <Card style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} shadow="true">
                <Card.Img variant="top" src={rumahAdat} />
                <Card.Body>
                  <Card.Title style={{color: '#59A3FF', fontWeight: 'bold'}}>Traditional House</Card.Title>
                  <Card.Text style={{ fontWeight: '400', color: 'grey', fontSize:'14px'}}>
                    Rumah adat di Jawa Barat memiliki sejumlah permasalahan menjadi terlupakan 
                  </Card.Text>
                  <Button href='/art/house-traditional' variant="primary">See More</Button>
                </Card.Body>
              </Card>
          </Col>

          <Col md={6} className='d-flex justify-content-center mb-3'>
            <Card style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} shadow="true">
                <Card.Img variant="top" src={bajuAdat} />
                <Card.Body>
                  <Card.Title style={{color: '#59A3FF', fontWeight: 'bold'}}>Traditional Attire</Card.Title>
                  <Card.Text style={{ fontWeight: '400', color: 'grey', fontSize:'14px'}}>
                  Permasalahan terkait baju adat di Jawa Barat juga dapat menjadi fokus pelestarian budaya
                  </Card.Text>
                  <Button href='/art/attire-traditional' variant="primary">See More</Button>
                </Card.Body>
              </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Categories;