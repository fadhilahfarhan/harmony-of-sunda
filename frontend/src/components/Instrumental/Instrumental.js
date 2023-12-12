import { Container, Row, Col } from 'react-bootstrap';
import styles from './Instrumental.module.css';

import rusa from '../../assets/images/main/rusa.jpg';

const Instrumental = () => {
    return (
        <>
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