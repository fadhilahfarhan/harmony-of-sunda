import { Container, Row, Col } from 'react-bootstrap';
import styles from './Instrumental.module.css';

import rusa from '../../assets/images/main/rusa.jpg';

const Instrumental = () => {
    return (
        <>
            <Container>
                <Row className='mt-3'>
                    <Col md={6} className={styles.colLeft}>
                        <h3 className={styles.headline__instrument}>Penjelajahan Melalui Ragam Alat Musik Tradisional Sunda</h3>
                        <p className={styles.paragraf__instrument}>
                        Setiap alat musik menciptakan sebuah cerita unik tentang budaya Sunda yang kaya, 
                        memberikan kita wawasan mendalam tentang bagaimana masyarakat setempat mengartikan 
                        keindahan dalam getaran-getaran yang diciptakan oleh kacapi yang mendayu, calung yang 
                        lembut, dan angklung yang riang. Di sini, kita akan memperdalam pemahaman tentang peran 
                        setiap alat musik dalam konteks tradisional Sunda, membuka tirai tentang bagaimana mereka 
                        menjadi penjaga kearifan lokal yang tak ternilai. Mari kita bersama-sama meresapi keindahan 
                        yang terkandung dalam getaran dan harmoni alat musik tradisional Sunda. Dengan beragam informasi 
                        mendalam dan multimedia yang menarik, website ini bukan hanya menjadi sumber referensi, melainkan 
                        juga teman setia dalam eksplorasi Anda menuju dunia yang ajaib dan sarat makna ini.
                        </p>
                    </Col>
                    <Col md={6} className={`${styles.colRight} text-center`}>
                        <img src='https://images.pexels.com/photos/4473409/pexels-photo-4473409.jpeg' alt='foto bermain alat musik' className='mx-auto'/>
                    </Col>
                </Row>
            </Container>

            <h1 className="text-center mt-4">Alat Musik tradisional</h1>

                <div className={styles.container}>
                    <div className={styles.card}>
                        <div className={styles.imgBx}>
                            <img src={rusa} alt='feature'/>
                        </div>
                        <div className={styles.content}>
                            <h2 className='text-center'>Judul</h2>
                            <p>afasfdsjngjdsnfjkdsnjnsdjkvjks vjk dsjk vjdsfndsjkfnjdskfnjkdsnfjkdsn</p>
                            <a href='#' >Read More</a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.imgBx}>
                        <img src={rusa} alt='feature'/>
                        </div>
                        <div className={styles.content}>
                            <h2 className='text-center'>Judul</h2>
                            <p>afasfdsjngjdsnfjkdsnjnsdjkvjks vjk dsjk vjdsfndsjkfnjdskfnjkdsnfjkdsn</p>
                            <a href='#' >Read More</a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.imgBx}>
                        <img src={rusa} alt='feature'/>
                        </div>
                        <div className={styles.content}>
                            <h2 className='text-center'>Judul</h2>
                            <p>afasfdsjngjdsnfjkdsnjnsdjkvjks vjk dsjk vjdsfndsjkfnjdskfnjkdsnfjkdsn</p>
                            <a href='#' >Read More</a>
                        </div>
                    </div>
                </div>
            
        </>    
    )

}

export default Instrumental;