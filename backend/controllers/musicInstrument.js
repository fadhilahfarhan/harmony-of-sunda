import Models from '../models/models.js';

const table = 'alatmusiksunda';

class MusicInstrument {
  async index(req, res) {
    try {
      const getAllInstruments = await Models.all(table);

      if (getAllInstruments.length) {
        const data = {
          message: 'Mendapatkan semua data alat musik',
          data: getAllInstruments,
        };
        return res.status(200).json(data);
      }

      res.status(200).json({ message: `belum ada data alat musik`, data: [] });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred', error });
    }
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
    if (storeInstrument) {
      return res.status(200).json({ message: `menambahkan data alat musik` });
    }
    res.status(404).json({message: 'gagal'})
  }

  async update(req, res) { 
    const { id } = req.params;
    const { nama, deskripsi, gambar } = req.body;
    const findInstrument = await Models.find(id, table);

    const newData = {
      nama: nama || findInstrument.nama,
      deskripsi: deskripsi || findInstrument.deskripsi,
      gambar: gambar || findInstrument.gambar,
      updated_at: new Date().toISOString()
    };

    if (findInstrument) {
      Models.update(newData, id, table);
      return res.status(201).json({message: 'Berhasil Memperbarui data alat musik'});
    }

    res.status(404).json({ message: 'Data tidak ditemukan' });
  }

  async destroy(req, res) {
    const { id } = req.params;
    const findInstrument = await Models.find(id, table);
    if (findInstrument.length > 0) {
      Models.delete(id, table);
      return res.status(200).json({ message: 'Data berhasil dihapus' });
    }
    res.status(404).json({ message: 'Data tidak ditemukan' });
  }
}

const MusicInstrumentObject = new MusicInstrument();

export default MusicInstrumentObject;
