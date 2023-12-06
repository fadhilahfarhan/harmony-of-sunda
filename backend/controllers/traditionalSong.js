import Models from '../models/models.js';

const table = 'lagudaerahsunda';

class TraditionalSong {
  async index(req, res) {
    try {
      const getAllSong = await Models.all(table);

      if (getAllSong.length) {
        const data = {
          message: 'Mendapatkan semua data lagu daerah',
          data: getAllSong,
        };
        return res.status(200).json(data);
      }

      res.status(200).json({ message: `belum ada data lagu daerah`, data: [] });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred', error });
    }
  }

  async filter(req, res) {
    const queryEntries = Object.entries(req.query);
    const checkQueryValues = queryEntries.some(
      ([key, value]) => value.trim() != ''
    );
    if (queryEntries.length > 0 && checkQueryValues) {
      const findSong = await Models.filter(req.query, table);
      if (findSong.length > 0) {
        const data = {
          message: `Mendapatkan data berhasil`,
          data: findSong,
        };
        return res.status(200).json(data);
      }
      return res.status(404).json({ message: 'data Tidak ada' });
    }
    res.status(404).json({ message: 'data Tidak ada' });
  }

  async find(req, res) {
    const { id } = req.params;
    const findSong = await Models.find(id, table);
    if (findSong.length > 0) {
      const data = {
        message: 'mendapatkan data berdasarkan id',
        data: findSong,
      };
      return res.status(200).json(data);
    }
    res.status(404).json({ message: 'data tidak ada' });
  }

  async store(req, res) {
    const storeSong = await Models.create(req.body, table);
    if (storeSong) {
      return res.status(200).json({ message: `menambahkan data lagu daerah` });
    }
    res.status(404).json({message: 'gagal'})
  }

  async update(req, res) { 
    const { id } = req.params;
    const { judul, ciptaan, lirik, audio } = req.body;
    const findSong = await Models.find(id, table);

    const newData = {
      judul: judul || findSong.judul,
      ciptaan: ciptaan || findSong.ciptaan,
      lirik: lirik || findSong.lirik,
      audio: audio || findSong.audio,
    };

    if (findSong.length > 0) {
      Models.update(newData, id, table);
      return res.status(201).json({message: 'Berhasil Memperbarui data lagu daerah'});
    }

    res.status(404).json({ message: 'Data tidak ditemukan' });
  }

  async destroy(req, res) {
    const { id } = req.params;
    const findSong = await Models.find(id, table);
    if (findSong.length > 0) {
      Models.delete(id, table);
      return res.status(200).json({ message: 'Data berhasil dihapus' });
    }
    res.status(404).json({ message: 'Data tidak ditemukan' });
  }
}

const TraditionalSongObject = new TraditionalSong();

export default TraditionalSongObject;
