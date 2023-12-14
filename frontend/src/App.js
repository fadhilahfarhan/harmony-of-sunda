import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import MusicalInstrument from './pages/page/MusicalInstrument';
import MusicTraditional from './pages/page/MusicTraditional';
import HouseTraditional from './pages/page/HouseTraditional';
import DanceTraditional from './pages/page/DanceTraditional';
import AttireTraditional from './pages/page/AttireTraditional';
import Layout from './layout/Layout';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/art/musical-instrument' element={<MusicalInstrument />} />
          <Route path='/art/music-traditional' element={<MusicTraditional />} />
          <Route path='/art/house-traditional' element={<HouseTraditional />} />
          <Route path='/art/dance-traditional' element={<DanceTraditional />} />
          <Route path='/art/attire-traditional' element={<AttireTraditional />} />
          <Route path='/about-us' element={<AboutUs />} />\
        </Routes>
      </Layout>
    </>
  );
}

export default App;
