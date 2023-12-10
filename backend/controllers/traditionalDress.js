import Models from '../models/models.js';

const table = 'bajuadatsunda';

class TraditionalDress {
  async index(req, res) {
    try {
      const getAllDresses = await Models.all(table);

      if (getAllDresses.length) {
        const data = {
          message: 'Mendapatkan semua data baju tradisional',
          data: getAllDresses,
        };
        return res.status(200).json(data);
      }

      res.status(200).json({ message: `belum ada data baju tradisional`, data: [] });
    } catch (error) {
      res.status(500).json({ message: 'error', error });
    }
  }

  async find(req, res) {
    const { id } = req.params;
    const findDress = await Models.find(id, table);
    if (findDress) {
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
      return res.status(200).json({ message: `menambahkan data baju tradisional` });
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
      updated_at: new Date().toISOString()
    };

    if (findDress) {
      Models.update(newData, id, table);
      return res.status(201).json({message: 'Berhasil Memperbarui data baju tradisional'});
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
