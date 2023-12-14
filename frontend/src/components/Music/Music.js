import React, { useState } from 'react';
import styles from './Music.module.css';
import { Col } from 'react-bootstrap';
import audioData from '../../utils/constants/audio';

const Music = () => {
  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleModal = (item) => {
    setSelectedItem(item);
    setModal(!modal);
    document.body.classList.toggle('active-modal', !modal);
  };

  return (
    <>
      {audioData.map((item) => (
        <Col key={item.id} md={4} className='mb-4 mx-auto'>
          <div className={styles.player}>
            <div className={styles.imgbox}>
              <img src={item.cover} alt='poster lagu' className='img-fluid' />
              <button onClick={() => toggleModal(item)} className={`${styles.textBlock} btnModal`}>
                Selengkapnya
              </button>
            </div>
            <audio src={item.song} type='audio/mp3' controls />
            <h3 className={styles.songTitle}>{item.judul}</h3>
          </div>
        </Col>
      ))}
      {modal && selectedItem && (
        <div className={styles.modal}>
          <div onClick={() => toggleModal(selectedItem)} className={styles.overlay}></div>
          <div className={`${styles.modalContent} p-5`}>
            <h2 style={{ textAlign: 'center' }}>{selectedItem.judul}</h2>
            <div className={styles.containerImageMusic}>
              <img className='mt-2' src={selectedItem.cover} alt='feature' style={{width: '50%', height: '50%', objectFit: 'cover', borderRadius: '10px', margin: '0 auto'}}/>
            </div>
            <p className='mt-3' style={{ color: 'grey' }}>{selectedItem.deskripsi}</p>
            <button className={styles.closeModal} onClick={() => toggleModal(selectedItem)}>Tutup</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Music;