import db from '../config/dbmysql.js';

class Models {
  static all() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM alatmusiksunda';
      db.query(sql,(err, results)=>{
        if (err) throw err;
        resolve(results);
      })
    });
  }
}

export default Models;