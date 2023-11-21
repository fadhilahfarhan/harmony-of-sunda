import Models from '../models/models.js';

const table = 'alatmusiksunda';

class MusicInstrument {
  async index(req, res) {
    const getAllInstruments = await Models.all(table);

    if (getAllInstruments.length) {
      const data = {
        message: 'Mendapatkan semua data alat musik',
        data: getAllInstruments,
      };
      return res.status(200).json(data);
    }

    res.status(200).json({ message: `belum ada data alat musik` });
  }

  async filter(req, res) {
    const queryEntries = Object.entries(req.query);
    const checkQueryValues = queryEntries.some(
      ([key, value]) => value.trim() != ''
    );

    if (queryEntries.length > 0 && checkQueryValues) {
      const findInstrument = await Models.filter(req.query, table);
      if (findInstrument.length > 0) {
        const data = {
          message: `Mendapatkan data berhasil`,
          data: findInstrument,
        };
        return res.status(200).json(data);
      }
      return res.status(404).json({ message: 'data Tidak ada' });
    }
    res.status(404).json({ message: 'data Tidak ada' });
  }

  async find(req, res) {
    const { id } = req.params;
    const findInstrument = await Models.find(id, table);
    if (findInstrument) {
      const data = {
        message: 'mendapatkan data berdasarkan id',
        data: findInstrument,
      };
      return res.status(200).json(data);
    }
    res.status(404).json({ message: 'data tidak ada' });
  }

  async store(req, res) {
    const storeInstrument = await Models.create(req.body, table);

    const data = {
      message: `menambahkan data alat musik`,
      data: storeInstrument,
    };

    res.status(200).json(data);
  }

  async destroy(req, res){
    const { id } = req.params;
    const findInstrument = await Models.find(id, table);
    if(findInstrument){
      Models.delete(id, table);
      return res.status(200).json({message: 'Data berhasil dihapus'})
    }
    res.status(404).json({message: 'Data tidak ditemukan'})
  }
}

const MusicInstrumentObject = new MusicInstrument();

export default MusicInstrumentObject;
