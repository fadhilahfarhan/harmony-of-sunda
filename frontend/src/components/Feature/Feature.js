import React, { useState } from "react";
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
              <p>{description}</p>
              <button onClick={toggleModal} className={styles.btnModal}>
                Open
            </button>

            {modal && (
            <div className={styles.modal}>
                <div onClick={toggleModal} className={styles.overlay}></div>
                <div className={styles.modalContent}>
                    <h2>Hello Modal</h2>
                    <img src={itemPicture} alt='feature' style={{width: '50%', height: '50%', objectFit: 'cover'}}/>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Similique modi labore quod porro iure esse, quaerat ratione 
                        facere dolor distinctio accusantium quam perspiciatis, magni 
                        voluptatum tenetur vel laboriosam voluptatibus facilis eligendi 
                        repudiandae incidunt. Tempora soluta asperiores aperiam reiciendis
                        magni ad officia perspiciatis? Minus deserunt repellendus ipsam nesciunt 
                        ullam pariatur sint.
                    </p>
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