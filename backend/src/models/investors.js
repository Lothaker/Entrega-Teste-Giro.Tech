const connection = require("./connections");

const createInvestor = async (investor) => {
  const { name, email } = investor;
  const query = 'INSERT INTO investors (name, email) VALUES (?, ?)';
  const [result] = await connection.execute(query, [name, email]);
  return { id: result.insertId, name, email };
};

const getByEmail = async (email) => {
  const query = 'SELECT * FROM investors WHERE email = ?';
  const [investor] = await connection.execute(query, [email]);
  return investor.length > 0 ? investor[0] : null;
};

const deleteInvestorInvestments = async (investorId) => {
  const query = 'DELETE FROM investments WHERE investor_id = ?';
  await connection.execute(query, [investorId]);
};

const deleteInvestor = async (id) => {
  const query = 'DELETE FROM investors WHERE id = ?';
  await connection.execute(query, [id]);
};

module.exports = {
  createInvestor,
  getByEmail,
  deleteInvestorInvestments,
  deleteInvestor
};