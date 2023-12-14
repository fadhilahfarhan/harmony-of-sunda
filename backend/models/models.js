import pool from '../config/dbPostGreSQL.js';

class Models {
  static all(table) {
    return new Promise(async (resolve, reject) => {
      const queryText = `SELECT * FROM ${table}`;
      const client = await pool.connect();
      client.query(queryText, (err, result) => {
        resolve(result.rows);
      });
      client.release();
    });
  }

  static find(id, table) {
    return new Promise(async (resolve, reject) => {
      const queryText = `SELECT * FROM ${table} WHERE id = ${id}`;
      const client = await pool.connect();

      client.query(queryText, (err, result) => {
        const [data] = result.rows;
        resolve(data);
      });
      client.release();
    });
  }

  static create(data, table) {
    return new Promise(async (resolve, reject) => {
      const placeholdersCol = Object.keys(data).join(', ');

      let placeholdersVal = Object.values(data)
        .map((value) => `'${value}'`)
        .join(', ');

      if ('lirik' in data) {
        const lirikArray = data['lirik'].map((item) => `'${item}'`).join(',');
        placeholdersVal = placeholdersVal.replace(
          `'${data['lirik']}'`,
          `ARRAY[${lirikArray}]`
        );
      }

      const queryText = `INSERT INTO ${table} (${placeholdersCol}) VALUES (${placeholdersVal})`;
      const client = await pool.connect();
      client.query(queryText, (err, result) => {
        resolve(result);
      });
      client.release();
    });
  }

  static update(data, id, table) {
    return new Promise(async (resolve, reject) => {
      const updateValues = Object.entries(data).map(([key, value]) => {
        if (key === 'lirik') {
          const lirikArray = value.map((item) => `'${item}'`).join(',');
          return `${key} = ARRAY[${lirikArray}]`;
        }
        return `${key} = '${value}'`;
      });
  
      const updateString = updateValues.join(', ');

      const queryText = `UPDATE ${table} SET ${updateString} WHERE id = ${id}`;
      const client = await pool.connect();
      client.query(queryText, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  static delete(id, table) {
    return new Promise(async (resolve, reject) => {
      const queryText = `DELETE FROM ${table} WHERE id = ${id}`;
      const client = await pool.connect();
      client.query(queryText, (err, result) => {
        resolve(result);
      });
    });
  }
}

export default Models;
