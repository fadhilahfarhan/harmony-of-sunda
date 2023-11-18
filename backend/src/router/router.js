import express from 'express'
import MusicInstrument from '../controllers/musicInstrument.js';

const router = express.Router();

router.get('/', MusicInstrument.index)


export default router;