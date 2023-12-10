import Models from '../models/models.js';

const table = 'rumahadatsunda';

class TraditionalHouse {
  async index(req, res) {
    try {
      const getAllHouses = await Models.all(table);

      if (getAllHouses.length) {
        const data = {
          message: 'Mendapatkan semua data rumah tradisional',
          data: getAllHouses,
        };
        return res.status(200).json(data);
      }

      res.status(200).json({ message: `belum ada data rumah tradisional`, data: [] });
    } catch (error) {
      res.status(500).json({ message: 'error', error });
    }
  }

  async find(req, res) {
    const { id } = req.params;
    const findHouse = await Models.find(id, table);
    if (findHouse) {
      const data = {
        message: 'mendapatkan data berdasarkan id',
        data: findHouse,
      };
      return res.status(200).json(data);
    }
    res.status(404).json({ message: 'data tidak ada' });
  }

  async store(req, res) {
    const storeHouse = await Models.create(req.body, table);
    if (storeHouse) {
      return res.status(200).json({ message: `menambahkan data rumah tradisional` });
    }
    res.status(404).json({message: 'gagal'})
  }

  async update(req, res) { 
    const { id } = req.params;
    const { nama, deskripsi, gambar } = req.body;
    const findHouse = await Models.find(id, table);

    const newData = {
      nama: nama || findHouse.nama,
      deskripsi: deskripsi || findHouse.deskripsi,
      gambar: gambar || findHouse.gambar,
      updated_at: new Date().toISOString()
    };

    if (findHouse) {
      Models.update(newData, id, table);
      return res.status(201).json({message: 'Berhasil Memperbarui data rumah tradisional'});
    }

    res.status(404).json({ message: 'Data tidak ditemukan' });
  }

  async destroy(req, res) {
    const { id } = req.params;
    const findHouse = await Models.find(id, table);
    if (findHouse.length > 0) {
      Models.delete(id, table);
      return res.status(200).json({ message: 'Data berhasil dihapus' });
    }
    res.status(404).json({ message: 'Data tidak ditemukan' });
  }
}

const TraditionalHouseObject = new TraditionalHouse();

export default TraditionalHouseObject;
