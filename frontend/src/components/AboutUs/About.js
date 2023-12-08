import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className='story-about'>
            <Container className='mt-4'>
                <Row>
                    <Col className='mt-3'>
                        <h2>Educational Website To <br /> Find Out About Sundanese <br /> Culture</h2>
                    </Col>
                    <Col className='mt-3'>
                        <p>
                            The website is user-friendly, making it accessible for both scholars 
                            and enthusiasts alike. It's a platform that not only educates but also 
                            fosters appreciation for the diversity and beauty of Sundanese heritage. 
                            Through "Sunda," individuals from all walks of life can gain a deeper 
                            understanding of the cultural tapestry that makes up the Sundanese identity.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;