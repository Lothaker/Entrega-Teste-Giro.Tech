const connection = require("./connections");

const getAll = async () => {
  const [currencies] = await connection.execute('SELECT * FROM currencies');
  return currencies;
};

const createCurrency = async (currency) => {
  const { name, type } = currency;
  const query = 'INSERT INTO currencies (name, type) VALUES (?, ?)';
  const [result] = await connection.execute(query, [name, type]);
  return { id: result.insertId, name, type };
};

module.exports = {
  getAll,
  createCurrency
};