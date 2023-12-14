import Models from '../models/models.js';

const table = 'keseniansunda';

class SundaneseArt {
  async index(req, res) {
    try {
      const getAllArt = await Models.all(table);

      if (getAllArt.length) {
        const data = {
          message: 'Mendapatkan semua data kesenian sunda',
          data: getAllArt,
        };
        return res.status(200).json(data);
      }

      res.status(200).json({ message: `belum ada data kesenian sunda`, data: [] });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred', error });
    }
  }

  async find(req, res) {
    const { id } = req.params;
    const findArt = await Models.find(id, table);
    if (findArt) {
      const data = {
        message: 'mendapatkan data berdasarkan id',
        data: findArt,
      };
      return res.status(200).json(data);
    }
    res.status(404).json({ message: 'data tidak ada' });
  }

  async store(req, res) {
    const storeArt = await Models.create(req.body, table);
    if (storeArt) {
      return res.status(200).json({ message: `menambahkan data kesenian sunda` });
    }
    res.status(404).json({message: 'gagal'})
  }

  async update(req, res) { 
    const { id } = req.params;
    const { nama, deskripsi, gambar } = req.body;
    const findArt = await Models.find(id, table);

    const newData = {
      nama: nama || findArt.nama,
      deskripsi: deskripsi || findArt.deskripsi,
      gambar: gambar || findArt.gambar,
      updated_at: new Date().toISOString()
    };

    if (findArt) {
      Models.update(newData, id, table);
      return res.status(201).json({message: 'Berhasil Memperbarui data kesenian sunda'});
    }

    res.status(404).json({ message: 'Data tidak ditemukan' });
  }

  async destroy(req, res) {
    const { id } = req.params;
    const findArt = await Models.find(id, table);
    if (findArt.length > 0) {
      Models.delete(id, table);
      return res.status(200).json({ message: 'Data berhasil dihapus' });
    }
    res.status(404).json({ message: 'Data tidak ditemukan' });
  }
}

const SundaneseArtObject = new SundaneseArt();

export default SundaneseArtObject;
