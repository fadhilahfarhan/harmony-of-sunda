import Header from '../../components/Header/Header';
import lagu from '../../assets/images/header/lagu.png'
import ENDPOINTS from '../../utils/constants/endpoint';
import Musics from '../../components/Musics/Musics';

const MusicTraditional = () => {
  return (
    <>
      <Header
        titleArticle='Lagu daerah Jawa Barat tak hanya memiliki fungsi sebagai sarana hiburan'
        descriptionArticle='Lagu daerah Jawa Barat tak hanya memiliki fungsi sebagai sarana hiburan, 
          tetapi juga dapat menjadi pengiring tarian dalam sebuah upacara hingga media untuk berkomunikasi.
          Sejumlah lagu daerah Jawa Barat juga mempunyai lirik yang unik dan makna yang mendalam. Ciri-ciri 
          lagu daerah secara umum yakni bahasa yang digunakan sesuai dengan bahasa daerah asal penutur, memuat 
          nilai kebudayaan masyarakat setempat, serta diiringi alat musik tradisional. Di Jawa Barat, lagu daerah 
          kerap diiringi oleh kecapi, kendang, angklung, dan sebagainya. Kekinian, alat musiknya dikolaborasikan 
          dengan gitar, drum, dan alat musik modern lainnya. Lagu daerah Jawa Barat sangat beragam dan memiliki 
          makna tersendiri. Karena maknanya universal, maka lagu-lagu tersebut perlu untuk dilestarikan.'
        srcPicture={lagu}
        altPicture='gambar ilustrasi lagu'
      />
      <Musics title='Lagu Tradisional' endpoint={ENDPOINTS.MUSIC}/>
    </>
  );
} 

export default MusicTraditional;