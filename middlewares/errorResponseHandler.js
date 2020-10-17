/**
 * @module middlewares/errorResponseHandler
 */

module.exports = (err, req, res, next) => {
    /** code
    * @constant
    * @type {number}
    * @default 500
    */
    code = err.statusCode || 500,

    /** message
    * @constant
    * @type {string}
    * @default Something went wrong, please try again.
    */
    message = err.message || 'Something went wrong, please try again.';
    res.status(code).send({message: message, code: code});
};
