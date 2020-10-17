const TRANSACTIONS = require('./../models/transactions');

module.exports = async (req, res, next) => {
    console.log('called1');
    let transactionId = req.params.transactionId;

    if (transactionId) {
        if (Number.isInteger(parseInt(transactionId))) {
            transactionId = parseInt(transactionId);
        } else {
            return next({statusCode: 400, message: 'Invalid Parameters. Unable to process request.'});
        }
    } else {
        return next({statusCode: 400, message: 'Incomplete Parameters. Unable to process request.'});
    }

    const dataFromModel = await TRANSACTIONS.getById(transactionId);

    if (Object.keys(dataFromModel.err).length) {
        return next({});
    } else if (!Object.keys(dataFromModel.rows).length) {
        return next({statusCode: 403, message: 'Cannot/Unable serve to serve data for this request'});
    } else {
        req.data = dataFromModel.rows;
        return next();
    }
};
