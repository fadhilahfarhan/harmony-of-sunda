import Team from '../Team/Team';
import styles from './Teams.module.css';
import Sashi from '../../assets/images/team/sashi.jpg';
import Raihan from '../../assets/images/team/raihan.jpg';
import Reza from '../../assets/images/team/reza.jpeg';
import Fitri from '../../assets/images/team/fitri.jpg'
import Dicoding from '../../assets/images/team/dicoding.jpg';
import Fadhil from '../../assets/images/team/fadhil.jpg';

const Teams = () => {
  return (
    <>
      <div>
        <h2 className='text-center mt-4' >Our Team Capstone</h2>
        <p className='text-center mt-2' style={{fontWeight: '400', color: 'grey'}}>
          Tim dibalik pembuatan website “Harmony of Sunda” terdiri dari mahasiswa yang terdaftar di Kampus
          Program Merdeka, khusus mengikuti Cycle 5 kelas Dicoding. Situs web ini sedang dikembangkan sebagai
          tugas akhir mereka untuk kelas Dicoding.
        </p>

        <section>
          <div className={styles.row}>
            <Team
              profile={Sashi}
              name='Sashi Kirana'
              position='Project Manager'
              instagram='https://www.instagram.com/sashiiks/'
              linkedin='https://www.linkedin.com/in/sashi-kirana-salsabila-2b9241224/'
              github='https://github.com/sashiiks'
              email='mailto:kiranasashi68@gmail.com'
            />
            <Team
              profile={Raihan}
              name='Raihan Bayu'
              position='UI Design'
              instagram='https://www.instagram.com/raihanbepe/'
              linkedin='https://www.linkedin.com/in/raihan-bayu-prasetyo-7662b2235/'
              github='https://github.com/raihanbayuprasetyo'
              email='mailto:@raihanbepe02gmail.com'
            />
            <Team
              profile={Reza}
              name='Reza Pratama'
              position='Frontend Developer'
              instagram='https://www.instagram.com/rezafznp/'
              linkedin='https://www.linkedin.com/in/reza-fauzan-pratama/'
              github='https://github.com/reza-fauzan'
              email='mailto:rezafauzanpratama01@gmail.com'
            />
          </div>
          <div className={styles.row}>
            <Team
              profile={Fitri}
              name='Nurwahida Fitriani'
              position='Frontend Developer'
              instagram='https://www.instagram.com/fitrinw.1/'
              linkedin='https://www.linkedin.com/in/nurwahida-fitriani-272ba2221/'
              github='https://github.com/nurwahidaf'
              email='mailto:fnurwahida@gmail.com'
            />
            <Team
              profile={Fadhil}
              name='Fadhillah Farhan'
              position='Backend Developer'
              instagram='https://www.instagram.com/ fadil.farhannn/'
              linkedin=' https://www.linkedin.com/in/fadhilah-farhan-15765229a/'
              github=' https://github.com/fadhilahfarhan'
              email='mailto:fadhilahfarhan2004@gmail.com'
            />
            <Team
              profile={Dicoding}
              name='Dicoding Academy'
              position='Mentor'
              instagram='https://www.dicoding.com/'
              linkedin='https://www.dicoding.com/'
              github='https://www.dicoding.com/'
              email='https://www.dicoding.com/'
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Teams;