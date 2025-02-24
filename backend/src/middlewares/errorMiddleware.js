const errorMiddleware = (err, req, res, next) => {
    console.error("Erro inesperado:", err);
    return res.status(500).json({ message: "Erro interno do servidor." });
};

module.exports = errorMiddleware;