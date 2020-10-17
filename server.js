const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const app = express();

/**
 * Middlewares
 * 1. Morgan - middleware for logging all api requests. This outputs methods, endpoint, status
 *    and response time in ms to console.
 * 2. Body Parser - middleware to parse request body into json
 * 3. Error Response Handler - custom middleware for handling error response
 */

app.use(morgan(':method :url :status - :response-time ms'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

/**
 * Attach access control headers for request
*/
app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

/**
 * Router for simple app health check
 */
app.use('/health', (req, res) => {
    res.status(200).send('Serving Hot Chips');
});

/**
 * Router for transactionservice APIs
 */
app.use('/transactionservice', require('./api/transactionservice'));


app.use(require('./middlewares/errorResponseHandler'));

module.exports = app;

