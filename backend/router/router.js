import express from 'express'
import MusicInstrument from '../controllers/musicInstrument.js';
 
const router = express.Router();

router.get('/alatmusik', MusicInstrument.index);
router.get('/alatmusik/filter', MusicInstrument.filter);
router.post('/alatmusik', MusicInstrument.store);
router.get('/alatmusik/:id', MusicInstrument.find);
router.delete('/alatmusik/:id', MusicInstrument.destroy);
router.put('/alatmusik/:id', MusicInstrument.update)


export default router;