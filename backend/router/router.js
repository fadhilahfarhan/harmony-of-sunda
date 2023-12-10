import express from 'express';
import MusicInstrument from '../controllers/musicInstrument.js';
import TraditionalDress from '../controllers/traditionalDress.js';
import TraditionalSong from '../controllers/traditionalSong.js';
import TraditionalHouse from '../controllers/traditionalHouse.js';
import TraditionalDance from '../controllers/traditionalDance.js';

const router = express.Router();

router.get('/alatmusik', MusicInstrument.index);
router.post('/alatmusik', MusicInstrument.store);
router.get('/alatmusik/:id', MusicInstrument.find);
router.delete('/alatmusik/:id', MusicInstrument.destroy);
router.put('/alatmusik/:id', MusicInstrument.update);

router.get('/baju', TraditionalDress.index);
router.post('/baju', TraditionalDress.store);
router.get('/baju/:id', TraditionalDress.find);
router.delete('/baju/:id', TraditionalDress.destroy);
router.put('/baju/:id', TraditionalDress.update);

router.get('/lagu', TraditionalSong.index);
router.post('/lagu', TraditionalSong.store);
router.get('/lagu/:id', TraditionalSong.find);
router.delete('/lagu/:id', TraditionalSong.destroy);
router.put('/lagu/:id', TraditionalSong.update);

router.get('/rumah', TraditionalHouse.index);
router.post('/rumah', TraditionalHouse.store);
router.get('/rumah/:id', TraditionalHouse.find);
router.delete('/rumah/:id', TraditionalHouse.destroy);
router.put('/rumah/:id', TraditionalHouse.update);

router.get('/tarian', TraditionalDance.index);
router.post('/tarian', TraditionalDance.store);
router.get('/tarian/:id', TraditionalDance.find);
router.delete('/tarian/:id', TraditionalDance.destroy);
router.put('/tarian/:id', TraditionalDance.update);

export default router;
