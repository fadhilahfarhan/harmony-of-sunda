import Models from '../models/models.js';

const table = 'tariansunda';

class TraditionalDance {
  async index(req, res) {
    try {
      const getAllDances = await Models.all(table);

      if (getAllDances.length) {
        const data = {
          message: 'Mendapatkan semua data tarian',
          data: getAllDances,
        };
        return res.status(200).json(data);
      }

      res.status(200).json({ message: `belum ada data tarian`, data: [] });
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
      const findDance = await Models.filter(req.query, table);
      if (findDance.length > 0) {
        const data = {
          message: `Mendapatkan data berhasil`,
          data: findDance,
        };
        return res.status(200).json(data);
      }
      return res.status(404).json({ message: 'data Tidak ada' });
    }
    res.status(404).json({ message: 'data Tidak ada' });
  }

  async find(req, res) {
    const { id } = req.params;
    const findDance = await Models.find(id, table);
    if (findDance.length > 0) {
      const data = {
        message: 'mendapatkan data berdasarkan id',
        data: findDance,
      };
      return res.status(200).json(data);
    }
    res.status(404).json({ message: 'data tidak ada' });
  }

  async store(req, res) {
    const storeDance = await Models.create(req.body, table);
    if (storeDance) {
      return res.status(200).json({ message: `menambahkan data tarian` });
    }
    res.status(404).json({message: 'gagal'})
  }

  async update(req, res) { 
    const { id } = req.params;
    const { nama, deskripsi, gambar } = req.body;
    const findDance = await Models.find(id, table);

    const newData = {
      nama: nama || findDance.nama,
      deskripsi: deskripsi || findDance.deskripsi,
      gambar: gambar || findDance.gambar,
    };

    if (findDance.length > 0) {
      Models.update(newData, id, table);
      return res.status(201).json({message: 'Berhasil Memperbarui data rumah tradisional'});
    }

    res.status(404).json({ message: 'Data tidak ditemukan' });
  }

  async destroy(req, res) {
    const { id } = req.params;
    const findDance = await Models.find(id, table);
    if (findDance.length > 0) {
      Models.delete(id, table);
      return res.status(200).json({ message: 'Data berhasil dihapus' });
    }
    res.status(404).json({ message: 'Data tidak ditemukan' });
  }
}

const TraditionalDanceObject = new TraditionalDance();

export default TraditionalDanceObject;
