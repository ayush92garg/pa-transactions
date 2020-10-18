const TRANSACTIONS = require('./../models/transactions');

module.exports = async (req, res, next) => {
    const store = {
        transactionId: req.params.transactionId || null,
        amount: req.body.amount || null,
        type: req.body.type || null,
        parent_id: req.body.parent_id || null,
    };
    console.log(store);
    if (!store.transactionId || !store.amount || isNaN(store.amount) || !store.type) {
        return next({statusCode: 400, message: 'Incomplete Parameters. Unable to process request.'});
    }


    if (store.parent_id) {
        if (!Number.isInteger(store.parent_id)) {
            return next({statusCode: 400, message: 'Invalid Parameters. Unable to process request.'});
        } else if (store.transactionId === store.parent_id) {
            return next({statusCode: 400, message: 'Invalid Parameters. Unable to process request.'});
        } else {
            const parentIdRecords = await TRANSACTIONS.getById(store.parent_id);
            if (Object.keys(parentIdRecords.err).length) {
                return next({});
            } else if (!Object.keys(parentIdRecords.rows).length) {
                return next({statusCode: 400, message: 'Invalid Parameters. Unable to process request.'});
            }
        }
    }

    const insert = await TRANSACTIONS.put(store.transactionId, store.amount, store.type, store.parent_id);

    if (Object.keys(insert.err).length) {
        if (insert.err.code === 'ER_DUP_ENTRY') {
            return next({statusCode: 500, message: 'Duplicate Entry.'});
        } else {
            return next({});
        }
    } else {
        return next();
    }
};
