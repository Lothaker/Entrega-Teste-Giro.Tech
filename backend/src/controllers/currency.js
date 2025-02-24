const currencies = require('../models/currency');

const getAllCurrencies = async (req, res) => {
    const currenciesList = await currencies.getAll();
    return res.status(200).json(currenciesList);
};

const createCurrency = async (req, res) => {
    try {
        const { name, type } = req.body;
        const newCurrency = await currencies.createCurrency({ name, type });
        return res.status(201).json(newCurrency);
    }
    catch (error) {
        console.error("Erro ao criar moeda:", error);
        return res.status(500).json({ message: "Erro interno ao criar moeda." });
    }
};

module.exports = {
    getAllCurrencies,
    createCurrency
};