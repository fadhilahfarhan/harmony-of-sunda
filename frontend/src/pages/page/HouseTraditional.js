import Features from '../../components/Features/Features';
import Header from '../../components/Header/Header';

import rumahAdat from '../../assets/images/header/rumahAdat.png';

const HouseTraditional = () => {
    return (
      <>
        <Header
          titleArticle='Eksplorasi Keindahan Arsitektur Tradisional Sunda'
          descriptionArticle='Menikmati keindahan Rumah Adat Sunda tanpa perlu berkunjung secara fisik. Dalam galeri visual kami, 
          Anda akan disuguhkan dengan gambar-gambar berkualitas tinggi yang memperlihatkan setiap detail rumah adat. Mulai dari 
          ornamen pintu hingga halaman yang hijau, setiap gambar memberikan pandangan eksklusif yang memperkaya pengetahuan Anda.
          Tidak hanya satu, rumah adat Sunda ternyata terdiri dari beberapa jenis. Setiap bentuk rumah adat terebut merupakan terapan dari 
          kehidupan masyarakat suku Sunda yang kerap melestarikan pengetahuan dari hidup tradisional dan keharmonisan dengan alam. Hal ini 
          terlihat dari penggunaan bahan-bahan alami, seperti batu, bambu, kayu, hingga dedaunan.'
          srcPicture={rumahAdat}
          altPicture='gambar ilustrasi rumah adat'
        />

        <Features title='Rumah adat Tradisional'/>
      </>
    );
  }
  
  export default HouseTraditional;