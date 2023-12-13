import { Container, Row, Col } from 'react-bootstrap';
import styles from './About.module.css';
import team from "../../assets/images/about/team.png"

const About = () => {
    return (
        <div className={styles.storyAbout} style={{borderRadius: '20px'}}>
            <Container className='mt-4'>
                <Row>
                    <Col md={6} className='my-auto p-4'>
                        <h2 style={{color: '#59A3FF', textAlign: 'left'}}>Website Edukasi Untuk <br/> Mengetahui Kebudayaan <br/> Sunda</h2>
                        <p style={{fontWeight: '200', color: 'grey', textAlign: 'left'}}>
                            Situs web ini mudah digunakan, sehingga dapat diakses baik oleh para cendekiawan maupun peminatnya. 
                            Ini adalah platform yang tidak hanya mendidik tetapi juga
                            menumbuhkan apresiasi terhadap keberagaman dan keindahan peninggalan Sunda.
                            Melalui “Sunda”, individu dari berbagai lapisan masyarakat dapat memperoleh pemahaman yang lebih mendalam
                            pemahaman tentang permadani budaya yang membentuk identitas Sunda.
                        </p>
                    </Col>
                    <Col md={6} className='mt-3 mb-3'>
                        <img src={team} alt='team' style={{width: '100%'}}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;