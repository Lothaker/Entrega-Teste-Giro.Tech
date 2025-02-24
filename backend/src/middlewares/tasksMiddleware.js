const validateCurrency = (req, res, next) => {
    const { name, type } = req.body;
    if (!name || name == "") {
      return res.status(400).json({ message: "O campo 'name' é obrigatório" });
    }
    if (!type || type == "") {
      return res.status(400).json({ message: "O campo 'type' é obrigatório" });
    }
    next();
  };
  
  const validateInvestor = (req, res, next) => {
    const { name, email } = req.body;
    if (!name || name == "") {
      return res.status(400).json({ message: "O campo 'name' é obrigatório" });
    }
    if (!email || email == "") {
      return res.status(400).json({ message: "O campo 'email' é obrigatório" });
    }
    next();
  };
  
  module.exports = {
    validateCurrency,
    validateInvestor
  };
  