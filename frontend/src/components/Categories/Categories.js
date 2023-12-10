import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CardImages from "../../assets/images/main/cardImages.jpg";

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
              <Card.Img variant="top" src={CardImages} />
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
                <Card.Img variant="top" src={CardImages} />
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
                <Card.Img variant="top" src={CardImages} />
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
                <Card.Img variant="top" src={CardImages} />
                <Card.Body>
                  <Card.Title>Traditional House</Card.Title>
                  <Card.Text>
                    Rumah adat di Jawa Barat memiliki sejumlah permasalahan menjadi terlupakan 
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
          </Col>

          <Col md={6} className='d-flex justify-content-center mb-3'>
            <Card style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} shadow="true">
                <Card.Img variant="top" src={CardImages} />
                <Card.Body>
                  <Card.Title>Traditional Attire</Card.Title>
                  <Card.Text>
                  Permasalahan terkait baju adat di Jawa Barat juga dapat menjadi fokus pelestarian budaya
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Categories;