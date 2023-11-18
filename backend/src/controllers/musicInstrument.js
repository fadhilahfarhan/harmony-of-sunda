import Models from "../models/models.js";

class MusicInstrument{
  async index(req, res){
    const getAll = await Models.all();
    const data = {
      message: "mendapatkan semua data alat musik",
      data: getAll
    }

    res.status(200).json(data);
  }
}

const MusicInstrumentObject = new MusicInstrument()

export default MusicInstrumentObject;