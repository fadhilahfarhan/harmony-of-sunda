import React from 'react';
import Header from '../../components/Header/Header';
import Features from '../../components/Features/Features';
import alatMusik from '../../assets/images/header/alatmusik.png';
import ENDPOINTS from '../../utils/constants/endpoint';

const MusicalInstrument = () => {
  return (
    <>
      <Header
        titleArticle='Penjelajahan Melalui Ragam Alat Musik Tradisional Sunda'
        descriptionArticle=' Setiap alat musik menciptakan sebuah cerita unik tentang budaya Sunda yang kaya, 
          memberikan kita wawasan mendalam tentang bagaimana masyarakat setempat mengartikan 
          keindahan dalam getaran-getaran yang diciptakan oleh kacapi yang mendayu, calung yang 
          lembut, dan angklung yang riang. Di sini, kita akan memperdalam pemahaman tentang peran 
          setiap alat musik dalam konteks tradisional Sunda, membuka tirai tentang bagaimana mereka 
          menjadi penjaga kearifan lokal yang tak ternilai. Mari kita bersama-sama meresapi keindahan 
          yang terkandung dalam getaran dan harmoni alat musik tradisional Sunda. Dengan beragam informasi 
          mendalam dan multimedia yang menarik, website ini bukan hanya menjadi sumber referensi, melainkan 
          juga teman setia dalam eksplorasi Anda menuju dunia yang ajaib dan sarat makna ini.'
        srcPicture={alatMusik}
        altPicture='gambar ilustrasi alat musik'
      />
      <Features title='Alat Musik Tradisional' endpoint={ENDPOINTS.MUSICAL_INSTRUMENT}/>
    </>
  );
}

export default MusicalInstrument;