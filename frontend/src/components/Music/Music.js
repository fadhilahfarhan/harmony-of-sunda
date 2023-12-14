import musicImage from '../../assets/images/main/musicimg.jpg';
import styles from 'Music.module.css';

const Music = (props) => {
  const { musicImage, musicAudio } = props;
  return (
    <>
      <div className={styles.player}>
        <div className={styles.imgbox}>
          <img src={musicImage} alt='poster lagu'>{musicImage}</img>
        </div>
        <audio src='' type="audio/mp3" controls>{musicAudio}</audio>
      </div>
    </>
  );
}

export default Music;