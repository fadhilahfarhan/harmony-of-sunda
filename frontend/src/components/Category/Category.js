import { Col, Card, Button } from 'react-bootstrap';

const Category = (props) => {
  const { srcImage, category, categoryText} = props;

  return (
    <>
      <Col md={4} className='d-flex justify-content-center mb-3'>
        <Card style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} shadow="true">
          <Card.Img variant="top" src={srcImage} />
          <Card.Body>
            <Card.Title style={{color: '#59A3FF', fontWeight: 'bold'}}>{category}</Card.Title>
            <Card.Text style={{ fontWeight: '400', color: 'grey', fontSize:'14px'}}>{categoryText}</Card.Text>
            <Button href='/art/music-traditional' variant="primary">Selengkapnya...</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default Category;