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
    const filterType = Object.keys(req.query)[0];
    const filterValue = Object.values(req.query)[0]
    const findInstrument = await Models.find(filterValue, filterType, table);

    if (findInstrument) {
      const data = {
        message: `Mendapatkan alat musik dengan ${filterType} ${filterValue}`,
        data: findInstrument,
      };
      return res.status(200).json(data);
    }

    res.status(404).json({ message: filterValue});
  }

  async store(req, res) {
    const storeInstrument = await Models.create(req.body, table);

    const data = {
      message: `menambahkan data alat musik`,
      data: storeInstrument,
    };

    res.status(200).json(data);
  }
}

const MusicInstrumentObject = new MusicInstrument();

export default MusicInstrumentObject;
