import Features from '../../components/Features/Features';
import Header from '../../components/Header/Header';
import bajuAdat from '../../assets/images/header/bajuadat.png';
import ENDPOINTS from '../../utils/constants/endpoint';

const AttireTraditional = () => {
  return (
    <>
      <Header
        titleArticle='Pesona Baju Adat Sunda: Lebih dari Sekadar Pakaian'
        descriptionArticle='Baju Adat Sunda bukan hanya pakaian, melainkan 
          karya seni yang menggambarkan cerita panjang dan kaya akan warisan budaya. 
          Mulai dari keelokan tata warna yang mencerminkan alam sekitar hingga pola 
          tradisional yang mendalam, setiap detail menuturkan kisah unik tentang sejarah, 
          kepercayaan, dan kehidupan masyarakat Sunda. Baju Adat Sunda bukan hanya pakaian, 
          melainkan karya seni yang menggambarkan cerita panjang dan kaya akan warisan budaya. 
          Mulai dari keelokan tata warna yang mencerminkan alam sekitar hingga pola tradisional 
          yang mendalam, setiap detail menuturkan kisah unik tentang sejarah, kepercayaan, dan kehidupan 
          masyarakat Sunda.'
        srcPicture={bajuAdat}
        altPicture='gambar header baju adat'
      />
      <Features title='Baju Adat Tradisional' endpoint={ENDPOINTS.ATTIRE}/>
    </>
  );
}

export default AttireTraditional;
