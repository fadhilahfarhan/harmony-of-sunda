import styles from './Team.module.css';

const Team = (props) => {
  const { profile, name, position, instagram, linkedin, github, email } = props;
  return (
    <>
      <div className={styles.column}>
        <div className={styles.card}>
          <div className={styles.imgContainer}><img src={profile} alt={name}/></div>
          <h3>{name}</h3>
          <p className='text-center'>{position}</p>
          <div className={styles.icons}>
            <a href={instagram} target="_blank" rel='noreferrer'><i className="fab fa-instagram"></i></a>
            <a href={linkedin} target="_blank" rel='noreferrer'><i className="fab fa-linkedin"></i></a>
            <a href={github} target="_blank" rel='noreferrer'><i className="fab fa-github"></i></a>
            <a href={email} target="_blank" rel='noreferrer'><i className="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;