import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className='story-about'>
            <Container className='mt-4'>
                <Row>
                    <Col md={6} className='mt-3'>
                        <h2>Website Edukasi Untuk <br/> Mengetahui Kebudayaan <br/> Sunda</h2>
                        <p style={{fontWeight: '200', color: 'grey'}}>
                            Situs web ini mudah digunakan, sehingga dapat diakses baik oleh para cendekiawan maupun peminatnya. 
                            Ini adalah platform yang tidak hanya mendidik tetapi juga
                            menumbuhkan apresiasi terhadap keberagaman dan keindahan peninggalan Sunda.
                            Melalui “Sunda”, individu dari berbagai lapisan masyarakat dapat memperoleh pemahaman yang lebih mendalam
                            pemahaman tentang permadani budaya yang membentuk identitas Sunda.
                        </p>
                    </Col>
                    <Col md={6} className='mt-3 mb-3'>
                        <img src='https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg' alt='team' style={{width: '100%', borderRadius: '5px'}}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;