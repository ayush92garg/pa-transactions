const TRANSACTIONS = require('./../models/transactions');

module.exports = async (req, res, next) => {
    const transactionType = req.params.transactionType;

    dataFromModel = await TRANSACTIONS.getByType(transactionType);

    if (Object.keys(dataFromModel.err).length) {
        return next({});
    } else if (!Object.keys(dataFromModel.rows).length) {
        return next({statusCode: 403, message: 'Cannot/Unable serve to serve data for this request'});
    } else {
        const resArr = [];
        dataFromModel.rows.forEach(element => {
            resArr.push(element.transaction_id);
        });
        req.data = resArr;
        return next();
    }
};
