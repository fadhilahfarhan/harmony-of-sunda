import express from 'express'
import MusicInstrument from '../controllers/musicInstrument.js';
import TraditionalDress from '../controllers/traditionalDress.js';
 
const router = express.Router();

router.get('/alatmusik', MusicInstrument.index);
router.get('/alatmusik/filter', MusicInstrument.filter);
router.post('/alatmusik', MusicInstrument.store);
router.get('/alatmusik/:id', MusicInstrument.find);
router.delete('/alatmusik/:id', MusicInstrument.destroy);
router.put('/alatmusik/:id', MusicInstrument.update)

router.get('/bajutradisional', TraditionalDress.index);
router.get('/bajutradisional/filter', TraditionalDress.filter);
router.post('/bajutradisional', TraditionalDress.store);
router.get('/bajutradisional/:id', TraditionalDress.find);
router.delete('/bajutradisional/:id', TraditionalDress.destroy);
router.put('/bajutradisional/:id', TraditionalDress.update)

export default router;