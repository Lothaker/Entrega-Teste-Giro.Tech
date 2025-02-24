const express = require('express');
const router = express.Router();

// Controles
const currencyController = require('./controllers/currency');
const exchangeRateController = require('./controllers/exchangeRates');
const investorController = require('./controllers/investor');
const investmentController = require('./controllers/investment');
const tasksMiddleware = require('./middlewares/tasksMiddleware');


// Moeda
router.get('/currencies', currencyController.getAllCurrencies);
router.post('/currencies', tasksMiddleware.validateCurrency, currencyController.createCurrency);

// Taxa de Câmbio
router.get('/exchange-rates/recent', exchangeRateController.getRecentExchangeRates);
router.post('/exchange-rates', exchangeRateController.createExchangeRate);
router.put('/exchange-rates/:id', exchangeRateController.updateExchangeRate);
router.delete('/exchange-rates/old', exchangeRateController.deleteOldExchangeRates);

// Investidores
router.post('/investors', tasksMiddleware.validateInvestor, investorController.createInvestor);
router.delete('/investors/:id', investorController.deleteInvestor);

// Investimentos
router.post('/investments', investmentController.createInvestment);
router.get('/investments', investmentController.getAllInvestments);

module.exports = router;