const connection = require("./connections");

const createInvestment = async (investment) => {
  const { initial_amount, months, interest_rate, final_amount, currency_id, investor_id } = investment;
  const query = 'INSERT INTO investments (initial_amount, months, interest_rate, final_amount, currency_id, investor_id) VALUES (?, ?, ?, ?, ?, ?)';
  const [result] = await connection.execute(query, [initial_amount, months, interest_rate, final_amount, currency_id, investor_id]);
  return { id: result.insertId, initial_amount, months, interest_rate, final_amount, currency_id, investor_id };
};

module.exports = {
  createInvestment
};