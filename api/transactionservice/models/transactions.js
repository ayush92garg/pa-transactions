const config = require('./config');
const knex = require('../../../data-adaptors/mysql');


/**
 *
 * @param {long} transactionId - transaction id
 * @param {double} amount - amount of the transaction
 * @param {string} type - type of transaction
 * @param {long=} parentId - parent id of transaction, if any(optional)
 */
async function put(transactionId, amount, type, parentId) {
    const result = {
        err: {},
        rows: {},
    };
    if (!transactionId || !amount || isNaN(amount) || !type) {
        result.err = {
            'message': 'insufficient/invalid arguments',
        };
    } else {
        try {
            const rowId = await knex(config.TABLES.TRANSACTIONS).insert({
                transaction_id: transactionId,
                amount: amount,
                type: type,
                parent_id: parentId,
            });
            result.rows = rowId;
        } catch (e) {
            result.err = e;
        }
    }
    return result;
};

/**
 *
 * @param {string} transactionType - type of transaction
 * @return {object}
 */
async function getByType(transactionType) {
    const result = {
        err: {},
        rows: {},
    };
    if (!transactionType) {
        result.err = {
            'message': 'insufficient/invalid arguments',
        };
    } else {
        try {
            result.rows = await knex(config.TABLES.TRANSACTIONS).select('transaction_id').where({
                type: transactionType,
            });
        } catch (e) {
            result.err = e;
        }
    }
    return result;
}

/**
 *
 * @param {LONG} transactionId - type of transaction
 * @return {object}
 */
async function getById(transactionId) {
    const result = {
        err: {},
        rows: {},
    };
    if (!transactionId || !Number.isInteger(transactionId)) {
        result.err = {
            'message': 'insufficient/invalid arguments',
        };
    } else {
        try {
            result.rows = await knex(config.TABLES.TRANSACTIONS).where({
                transaction_id: transactionId,
            }).first();
        } catch (e) {
            result.err = e;
        }
    }
    return result;
}

/**
 *
 * @param {LONG} transactionId - type of transaction
 * @return {object}
 */
async function getSum(transactionId) {
    const result = {
        err: {},
        rows: {},
    };
    if (!transactionId || !Number.isInteger(transactionId)) {
        result.err = {
            'message': 'insufficient/invalid arguments',
        };
    } else {
        try {
            result.rows = await knex(config.TABLES.TRANSACTIONS).sum(config.TRANSACTIONS.amount + ' as sum').where({
                transaction_id: transactionId,
            }).orWhere({
                parent_id: transactionId,
            }).first();
        } catch (e) {
            result.err = e;
        }
    }
    return result;
}


module.exports = {
    'put': put,
    'getByType': getByType,
    'getById': getById,
    'getSum': getSum,
};
