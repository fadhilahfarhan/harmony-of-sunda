import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Jumbroton from "../components/Jumbroton/Jumbroton";
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import ExampleImages from "../assets/images/main/example.jpg";
import CardImanges from "../assets/images/main/cardImages.jpg";

function Home() {
  return (
    <div>
			<Navbar/>

      <Jumbroton />

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

      {/* <Container className='mt-4'>
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
      </Container> */}

      {/* <h1 className='text-center mt-3 mb-3'>Features</h1> */}
      <Container>
        <Row className='mb-3'>
          <Col md={4} className='d-flex justify-content-center mb-3'>
            <Card style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} shadow="true">
              <Card.Img variant="top" src={CardImanges} />
              <Card.Body>
                <Card.Title>Music</Card.Title>
                <Card.Text>
                Lagu daerah jawa barat pun jarang sekali diputar bahkan hanya sebagian yang mengetahui.
                </Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className='d-flex justify-content-center mb-3'>
            <Card style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} shadow="true">
                <Card.Img variant="top" src={CardImanges} />
                <Card.Body>
                  <Card.Title>Musical Instrument</Card.Title>
                  <Card.Text>
                  Seringkali di akui negara lain padahal merupakan alat musik dari indonesia daerah jawa barat.
                  </Card.Text>
                  <Button variant="primary">More</Button>
                </Card.Body>
              </Card>
          </Col>

          <Col md={4} className='d-flex justify-content-center mb-3'>
            <Card style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} shadow="true">
                <Card.Img variant="top" src={CardImanges} />
                <Card.Body>
                  <Card.Title>Dance</Card.Title>
                  <Card.Text>
                  Banyak sekali tari tradisional asal jawa barat yang jarang sekali di ketahui oleh sebagian besar gen z
                  </Card.Text>
                  <Button variant="primary">More</Button>
                </Card.Body>
              </Card>
          </Col>
        </Row>

        <Row className='mb-3'>
        <Col md={6} className='d-flex justify-content-center mb-3'>
            <Card style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} shadow="true">
                <Card.Img variant="top" src={CardImanges} />
                <Card.Body>
                  <Card.Title>Traditional House</Card.Title>
                  <Card.Text>
                    Begitupun rumah adat dan juga baju adat, seringkali banyak yang tidak tau dan paham mengenai 2 unsur ini
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
          </Col>

          <Col md={6} className='d-flex justify-content-center mb-3'>
            <Card style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} shadow="true">
                <Card.Img variant="top" src={CardImanges} />
                <Card.Body>
                  <Card.Title>Traditional Attire</Card.Title>
                  <Card.Text>
                    Begitupun rumah adat dan juga baju adat, seringkali banyak yang tidak tau dan paham mengenai 2 unsur ini
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
          </Col>
        </Row>
      </Container>
    </div>
      <Footer />
    </div>
  );
}

export default Home;
