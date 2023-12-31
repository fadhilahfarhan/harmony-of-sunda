import Header from '../../components/Header/Header';
import Features from '../../components/Features/Features';
import tarianTradisional from '../../assets/images/header/tarian.png';
import ENDPOINTS from '../../utils/constants/endpoint';

const DanceTraditional = () => {
  return (
    <>
      <Header
        titleArticle='Tarian tradisional Suku Sunda adalah ungkapan budaya yang kaya dan indah'
        descriptionArticle='Masyarakat Sunda secara umum mengenal ada banyak ragam seni tari yang berkembang dari sejak zaman dahulu. 
          Ragam kesenian Sunda khususnya tari, masih tetap hidup dan lestari hingga saat ini. Bahkan di beberapa kesempatan tari tradisional Sunda 
          sering dipentaskan untuk acara kenegaraan Indonesia. Banyak yang merasa senang bahkan terpukau dengan penampilan tarian Sunda, dengan lekukan 
          tangan yang sangat gemulai, disertai goyangan tubuh penarinya yang berirama, membuat tarian Sunda semakin mengagumkan mata penontonnya. Uniknya, 
          dalam seni tarian Sunda terkandung banyak pesan dan cerita yang termuat, mulai dari cerita rakyat, kerajaan hingga pesan kedamaian untuk seluruh Nusantara.'
        srcPicture={tarianTradisional}
        altPicture='gambar header tanian tradisional'
      />
      <Features title='Tarian Tradisional' endpoint={ENDPOINTS.DANCE}/>
    </>
  );
}

export default DanceTraditional;
