import db from '../config/dbmysql.js';

class Models {
  static all(table) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM ??';
      db.query(sql, table, (error, results) => {
        if (error) throw error;
        resolve(results);
      });
    });
  }

  static find(filterValue, filterType, table) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM ?? WHERE ${filterType} = ?`;
      console.log(sql);
      db.query(sql, [table, filterValue], (error, results) => {
        if (error) throw error;
        resolve(results);
      });
    });
  }

  static async create(data, table){
    const returnId = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO ?? SET ?"
      db.query(sql, [table, data], (error, results)=>{
        if (error) throw error;
        resolve(results.insertId);
      })
    })

    return this.find(returnId, "id", table);
  }
}

export default Models;
