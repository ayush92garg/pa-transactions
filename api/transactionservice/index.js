/** Express router providing transactionservice related routes
 * @module api/transactionservice
 * @requires express
 */

// eslint-disable-next-line new-cap
const router = require('express').Router();


/**
 * Route to insert a new transaction
 * @name transaction/:transactionId
 * @function
 * @memberof module:api/transactionservice
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.put('/transaction/:transactionId', require('./controllers/putById.js'));

/**
 * Route to get an exiting transactio by transaction ID
 * @name transaction/:transactionId
 * @function
 * @memberof module:api/transactionservice
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/transaction/:transactionId', require('./controllers/getById.js'));

/**
 * Route to get an exiting transactio by transaction type
 * @name types/:transactionType
 * @function
 * @memberof module:api/transactionservice
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/types/:transactionType', require('./controllers/getByType.js'));


/**
 * Route to get sum of all transaction related to a transaction ID
 * @name sum/:transactionId
 * @function
 * @memberof module:api/transactionservice
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/sum/:transactionId', require('./controllers/getSum.js'));

/**
 * Middle for handling http api response
 */
router.use(require('../../middlewares/responseHandler'));

module.exports = router;
