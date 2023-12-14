import React, { useState } from 'react';
import styles from './Feature.module.css';

const Feature = (props) => {
  const { itemTitle, itemPicture, description } = props;

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <div className={styles.card}>
        <div className={styles.imgBx}>
          <img src={itemPicture} alt='feature'/>
        </div>
        <div className={styles.content}>
          <h2 className='text-center'>{itemTitle}</h2>
          <p className={styles.shortDescription}>{description}</p>
          <button onClick={toggleModal} className={styles.btnModal}>Open</button>

          {modal && (
            <div className={styles.modal}>
              <div onClick={toggleModal} className={styles.overlay}></div>
              <div className={`${styles.modalContent} p-5`}>
                <h2>{itemTitle}</h2>
                <img className='mt-2' src={itemPicture} alt='feature' style={{width: '50%', height: '50%', objectFit: 'cover', borderRadius: '10px'}}/>
                <p className='mt-3' style={{ color: 'grey' }}>{description}</p>
                <button className={styles.closeModal} onClick={toggleModal}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Feature;