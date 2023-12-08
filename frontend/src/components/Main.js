import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import ExampleImages from "../assets/images/main/example.jpg";

const Main = () => {
  return (
    <div>
      <div className='about-sunda'>
        <h1 className="text-center mt-4">Tentang Suku Sunda</h1>
        <p className="text-center">
          Jawa Barat dikenal sebagai tanah Parahiangan yang kaya dengan keindahan alam dan
          pesona budayanya. Suku sunda merupakan bentuk keberadaan suku yang mendiami daerah
          tersebut. Seiring berkembangnya zaman kesenian suku sunda banyak sekali terancam punah,
          sebagian besar tidak mengetahui kesenian tersebut di antaranya :
        </p>
      </div>
      <Container className='mt-4'>
        <Row className='text-center'>
          <Col md={6}>
            <Image src={ExampleImages} alt='icon-tari-tradisional' className='circle-img'></Image>
            <h3>Tari Tradisional</h3>
            <p className='paragraf-main'>Banyak sekali tari tradisional asal jawa barat yang jarang sekali di ketahui oleh sebagian besar gen z</p>
          </Col>
          <Col md={6}>
            <Image src={ExampleImages} alt='icon-lagu-daerah' className='circle-img'></Image>
            <h3>Lagu Daerah</h3>
            <p className='paragraf-main'>Lagu daerah jawa barat pun jarang sekali diputar bahkan hanya sebagian yang mengetahui.</p>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col md={6}>
            <div className='cirle-container'>
              <img src={ExampleImages} alt='icon-rumah-baju-adat' className='circle-img'></img>
            </div>
            <h3>Rumah serta Baju Adat</h3>
            <p className='paragraf-main'>Begitupun rumah adat dan juga baju adat, seringkali banyak yang tidak tau dan paham mengenai 2 unsur ini</p>
          </Col>
          <Col md={6}>
            <Image src={ExampleImages} alt='icon-musik-tradisional' className='circle-img'></Image>
            <h3>Alat Musik Tradisional</h3>
            <p className='paragraf-main'>Alat musik dari jawa barat yang seringkali di akui oleh negara lain padahal merupakan alat musik dari indonesia khusunya daerah jawa barat.</p>
          </Col>
        </Row>
      </Container>
      <h1 className='text-center mt-5'>Features</h1>
      <Container>
        <Row>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Music</Card.Title>
              <Card.Text>
                Ciri khas lagu dari suku Sunda
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Music</Card.Title>
              <Card.Text>
                Ciri khas lagu dari suku Sunda
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Row>
        <Row>

        </Row>
      </Container>
    </div>
  );
}

export default Main;