import styles from './Feature.module.css';

const Feature = (props) => {
  const { itemTitle, itemPicture, description } = props;
  return (
    <>
      <div className={styles.card}>
          <div className={styles.imgBx}>
              <img src={itemPicture} alt='feature'/>
          </div>
          <div className={styles.content}>
              <h2 className='text-center'>{itemTitle}</h2>
              <p>{description}</p>
              <a href='/' >Read More</a>
          </div>
      </div>
    </>
  );
}

export default Feature;