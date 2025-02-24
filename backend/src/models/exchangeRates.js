const connection = require("./connections");

const getRecent = async () => {
  const query = `
    SELECT er.id, er.date, er.daily_variation, er.daily_rate, c.name AS currency_name, c.type AS currency_type
    FROM exchange_rates er
    JOIN currencies c ON er.currency_id = c.id
    WHERE er.date > CURDATE() - INTERVAL 7 DAY
  `;
  const [rates] = await connection.execute(query);
  return rates;
};

const createExchangeRate = async (rate) => {
  const { date, daily_variation, daily_rate, currency_id } = rate;
  const query = 'INSERT INTO exchange_rates (date, daily_variation, daily_rate, currency_id) VALUES (?, ?, ?, ?)';
  const [result] = await connection.execute(query, [date, daily_variation, daily_rate, currency_id]);
  return { id: result.insertId, date, daily_variation, daily_rate, currency_id };
};

const updateExchangeRate = async (id, rate) => {
  const { daily_variation, daily_rate, currency_id } = rate;
  const query = 'UPDATE exchange_rates SET daily_variation = ?, daily_rate = ?, currency_id = ? WHERE id = ?';
  await connection.execute(query, [daily_variation, daily_rate, currency_id, id]);
};

const deleteOldExchangeRates = async () => {
  const query = 'DELETE FROM exchange_rates WHERE date < CURDATE() - INTERVAL 30 DAY';
  await connection.execute(query);
};

module.exports = {
  getRecent,
  createExchangeRate,
  updateExchangeRate,
  deleteOldExchangeRates
};
