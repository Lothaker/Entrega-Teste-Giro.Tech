const investments = require('../models/investments');

const createInvestment = async (req, res) => {
  try {
    const { initial_amount, months, interest_rate, final_amount, currency_id, investor_id } = req.body;
    const newInvestment = await investments.createInvestment({ initial_amount, months, interest_rate, final_amount, currency_id, investor_id });
    return res.status(201).json(newInvestment);
  }
  catch (error) {
    console.error("Erro ao criar investimento:", error);
    return res.status(500).json({ message: "Erro interno ao criar investimento." });
  }
};

const getAllInvestments = async (req, res) => {
  const investments = await investmentsModel.getAll();
  return res.status(200).json(investments);
};
module.exports = { createInvestment, getAllInvestments };


module.exports = {
  createInvestment,
  getAllInvestments
};
