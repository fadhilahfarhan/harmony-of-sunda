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

  async filter(req, res) {
    const queryEntries = Object.entries(req.query);
    const checkQueryValues = queryEntries.some(
      ([key, value]) => value.trim() != ''
    );
 
    if (queryEntries.length > 0 && checkQueryValues) {
      const findHouse = await Models.filter(req.query, table);
      if (findHouse.length > 0) {
        const data = {
          message: `Mendapatkan data berhasil`,
          data: findHouse,
        };
        return res.status(200).json(data);
      }
      return res.status(404).json({ message: 'data Tidak ada' });
    }
    res.status(404).json({ message: 'data Tidak ada' });
  }

  async find(req, res) {
    const { id } = req.params;
    const findHouse = await Models.find(id, table);
    if (findHouse.length > 0) {
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
    };

    if (findHouse.length > 0) {
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
