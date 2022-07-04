const errorHandler = (err, req, res, next) => {
    res.status(err.status)
    .json({ error: err });
};

module.exports = errorHandler;