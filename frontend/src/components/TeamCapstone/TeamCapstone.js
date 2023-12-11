import React from 'react';

import styles from './TeamCapstone.module.css';
import Rusa from '../../assets/images/main/rusa.jpg';

import Sashi from '../../assets/images/team/sashi.jpg';
import Reza from '../../assets/images/team/reza.jpeg';
import Dicoding from '../../assets/images/team/dicoding.jpg';

const TeamCapstone = () => {
    return (
        <div>
            <h2 className='text-center mt-4' >Our Team Capstone</h2>
            <p className='text-center mt-2' style={{fontWeight: '400', color: 'grey'}}>
                Tim dibalik pembuatan website “Harmony of Sunda” terdiri dari mahasiswa yang terdaftar di Kampus
                Program Merdeka, khusus mengikuti Cycle 5 kelas Dicoding. Situs web ini sedang dikembangkan sebagai
                tugas akhir mereka untuk kelas Dicoding.
            </p>

            <section>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.card}>
                        <div className={styles.imgContainer}><img src={Sashi} alt="Sashi"/></div>
                        <h3>Sashi Kirana</h3>
                        <p className='text-center'>Project Manager</p>
                        <div className={styles.icons}>
                            <a href="https://www.instagram.com/sashiiks/" target="_blank" rel='noreferrer'><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/sashi-kirana-salsabila-2b9241224/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin"></i></a>
                            <a href="https://github.com/sashiiks" target="_blank" rel='noreferrer'><i className="fab fa-github"></i></a>
                            <a href="mailto:kiranasashi68@gmail.com" target="_blank" rel='noreferrer'><i className="fas fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
              
                <div className={styles.column}>
                    <div className={styles.card}>
                        <div className={styles.imgContainer}><img src={Rusa} alt="sdds"/></div>
                        <h3>Raihan Bayu</h3>
                        <p className='text-center'>UI Design</p>
                        <div className={styles.icons}>
                            <a href="https://www.instagram.com/rezafznp/" target="_blank" rel='noreferrer'><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/reza-fauzan-pratama/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin"></i></a>
                            <a href="https://github.com/reza-fauzan" target="_blank" rel='noreferrer'><i className="fab fa-github"></i></a>
                            <a href="mailto:rezafauzanpratama01@gmail.com" target="_blank" rel='noreferrer'><i className="fas fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
               
                <div className={styles.column}>
                    <div className={styles.card}>
                        <div className={styles.imgContainer}><img src={Reza} alt="sdds"/></div>
                        <h3>Reza Pratama</h3>
                        <p className='text-center'>Frontend Developer</p>
                        <div className={styles.icons}>
                            <a href="https://www.instagram.com/rezafznp/" target="_blank" rel='noreferrer'><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/reza-fauzan-pratama/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin"></i></a>
                            <a href="https://github.com/reza-fauzan" target="_blank" rel='noreferrer'><i className="fab fa-github"></i></a>
                            <a href="mailto:rezafauzanpratama01@gmail.com" target="_blank" rel='noreferrer'><i className="fas fa-envelope"></i></a>
                        </div>
                    </div>
                </div>

            </div>

            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.card}>
                        <div className={styles.imgContainer}><img src={Rusa} alt="sdds"/></div>
                        <h3>Nurwahida Fitri</h3>
                        <p className='text-center'>Frontend Developer</p>
                        <div className={styles.icons}>
                            <a href="https://www.instagram.com/fitrinw.1/"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/nurwahida-fitriani-272ba2221/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin"></i></a>
                            <a href="https://github.com/nurwahidaf" target="_blank" rel='noreferrer'><i className="fab fa-github"></i></a>
                            <a href="mailto:fnurwahida@gmail.com"><i className="fas fa-envelope" target="_blank" rel='noreferrer'></i></a>
                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.card}>
                        <div className={styles.imgContainer}><img src={Rusa} alt="padil"/></div>
                        <h3>Fadhillah Farhan</h3>
                        <p className='text-center'>Backend Developer</p>
                        <div className={styles.icons}>
                            <a href="https://www.instagram.com/fadil.farhannn/" target="_blank" rel='noreferrer'><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/fadhilah-farhan-15765229a/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin"></i></a>
                            <a href="https://github.com/fadhilahfarhan" target="_blank" rel='noreferrer'><i className="fab fa-github"></i></a>
                            <a href="mailto:fadhilahfarhan2004@gmail.com" target="_blank" rel='noreferrer'><i className="fas fa-envelope"></i></a>
                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.card}>
                        <div className={styles.imgContainer}><img src={Dicoding} alt="dicoding"/></div>
                        <h3>Dicoding Academy</h3>
                        <p className='text-center'>Mentor</p>
                        <div className={styles.icons}>
                            <a href="https://www.dicoding.com/" target="_blank" rel='noreferrer'><i className="fab fa-instagram"></i></a>
                            <a href="https://www.dicoding.com/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin"></i></a>
                            <a href="https://www.dicoding.com/" target="_blank" rel='noreferrer'><i className="fab fa-github"></i></a>
                            <a href="https://www.dicoding.com/" target="_blank" rel='noreferrer'><i className="fas fa-envelope"></i></a>
                        </div>
                    </div>
                </div>

            </div>
    </section>
        </div>
    )
}

export default TeamCapstone;