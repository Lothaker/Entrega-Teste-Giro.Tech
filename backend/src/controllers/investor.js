const investors = require('../models/investors');

const createInvestor = async (req, res) => {

  try {
    const { name, email } = req.body;
    const existingInvestor = await investors.getByEmail(email);
    if (existingInvestor) {
      return res.status(400).json({ error: 'E-mail já cadastrado' });
    }
    const newInvestor = await investors.createInvestor({ name, email });
    return res.status(201).json(newInvestor);
  }
  catch (error) {
    console.error("Erro ao criar investidor:", error);
    return res.status(500).json({ message: "Erro interno ao criar investidor." });
  }
};

const deleteInvestor = async (req, res) => {
  const { id } = req.params;

  await investors.deleteInvestorInvestments(id);

  await investors.deleteInvestor(id);

  return res.status(204).json();
};

module.exports = {
  createInvestor,
  deleteInvestor
};
