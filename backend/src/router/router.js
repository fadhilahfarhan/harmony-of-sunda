import express from 'express'
import MusicInstrument from '../controllers/musicInstrument.js';

const router = express.Router();

router.get('/alatmusik', MusicInstrument.index);
router.get('/alatmusik/filter', MusicInstrument.filter);
router.post('/alatmusik', MusicInstrument.store);


export default router;