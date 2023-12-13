import Features from '../../components/Features/Features';
import Header from '../../components/Header/Header';

import bajuAdat from '../../assets/images/header/bajuadat.png';
import ENDPOINTS from '../../utils/constants/endpoint';
const AttireTraditional = () => {
    return (
      <>
        <Header
          titleArticle='Aneka ragam baju adat suku Sunda memiliki ciri, filosofi dan keunikan masing-masing'
          descriptionArticle='Pakaian adat Jawa Barat dikenal berdasarkan umur, fungsi dan strata sosial. Secara umum, 
          ada pakaian adat yang digunakan oleh masyarakat biasa, kaum menengah dan para bangsawan. Ketiga jenis pakaian 
          adat tersebut akan terus dilestarikan hingga sekarang. Berikut jeni-jenis pakaian adat Jawa Barat yang populer:'
          srcPicture={bajuAdat}
          altPicture='gambar header baju adat'
        />
        <Features title='Baju Adat Tradisional' endpoint={ENDPOINTS.ATTIRE}/>
      </>
    );
  }
  
  export default AttireTraditional;