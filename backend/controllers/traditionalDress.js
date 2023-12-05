import Models from '../models/models.js';

const table = 'bajuadatsunda';

class TraditionalDress {
  async index(req, res) {
    try {
      const getAllDresses = await Models.all(table);

      if (getAllDresses.length) {
        const data = {
          message: 'Mendapatkan semua data alat musik',
          data: getAllDresses,
        };
        return res.status(200).json(data);
      }

      res.status(200).json({ message: `belum ada data baju adat`, data: [] });
    } catch (error) {
      res.status(500).json({ message: 'error', error });
    }
  }

  async filter(req, res) {
    const queryEntries = Object.entries(req.query);
    const checkQueryValues = queryEntries.some(
      ([key, value]) => value.trim() != ''
    );
 
    if (queryEntries.length > 0 && checkQueryValues) {
      const findDress = await Models.filter(req.query, table);
      if (findDress.length > 0) {
        const data = {
          message: `Mendapatkan data berhasil`,
          data: findDress,
        };
        return res.status(200).json(data);
      }
      return res.status(404).json({ message: 'data Tidak ada' });
    }
    res.status(404).json({ message: 'data Tidak ada' });
  }

  async find(req, res) {
    const { id } = req.params;
    const findDress = await Models.find(id, table);
    if (findDress.length > 0) {
      const data = {
        message: 'mendapatkan data berdasarkan id',
        data: findDress,
      };
      return res.status(200).json(data);
    }
    res.status(404).json({ message: 'data tidak ada' });
  }

  async store(req, res) {
    const storeDress = await Models.create(req.body, table);
    if (storeDress) {
      return res.status(200).json({ message: `menambahkan data alat musik` });
    }
    res.status(404).json({message: 'gagal'})
  }

  async update(req, res) { 
    const { id } = req.params;
    const { nama, deskripsi, gambar } = req.body;
    const findDress = await Models.find(id, table);

    const newData = {
      nama: nama || findDress.nama,
      deskripsi: deskripsi || findDress.deskripsi,
      gambar: gambar || findDress.gambar,
    };

    if (findDress.length > 0) {
      Models.update(newData, id, table);
      return res.status(201).json({message: 'Berhasil Memperbarui data alat musik'});
    }

    res.status(404).json({ message: 'Data tidak ditemukan' });
  }

  async destroy(req, res) {
    const { id } = req.params;
    const findDress = await Models.find(id, table);
    if (findDress.length > 0) {
      Models.delete(id, table);
      return res.status(200).json({ message: 'Data berhasil dihapus' });
    }
    res.status(404).json({ message: 'Data tidak ditemukan' });
  }
}

const TraditionalDressObject = new TraditionalDress();

export default TraditionalDressObject;
