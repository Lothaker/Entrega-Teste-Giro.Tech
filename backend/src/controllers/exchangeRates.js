const exchangeRates = require('../models/exchangeRates');

const getRecentExchangeRates = async (req, res) => {
    const rates = await exchangeRates.getRecent();
    return res.status(200).json(rates);
};

const createExchangeRate = async (req, res) => {
    try {
        const { date, daily_variation, daily_rate, currency_id } = req.body;
        const newRate = await exchangeRates.createExchangeRate({ date, daily_variation, daily_rate, currency_id });
        return res.status(201).json(newRate);
    }
    catch (error) {
        console.error("Erro ao criar taxa de câmbio:", error);
        return res.status(500).json({ message: "Erro interno ao criar taxa de câmbio." });
    }
};

const updateExchangeRate = async (req, res) => {
    const { id } = req.params;
    const { daily_variation, daily_rate, currency_id } = req.body;
    await exchangeRates.updateExchangeRate(id, { daily_variation, daily_rate, currency_id });
    return res.status(204).json();
};

const deleteOldExchangeRates = async (req, res) => {
    await exchangeRates.deleteOldExchangeRates();
    return res.status(204).json();
};

module.exports = {
    getRecentExchangeRates,
    createExchangeRate,
    updateExchangeRate,
    deleteOldExchangeRates
};