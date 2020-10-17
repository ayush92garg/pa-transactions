/**
 * @module middlewares/responseHandler
 */

module.exports = (req, res, next) => {
    res.setHeader('content-type', 'application/json');
    if (req.responseHtml) return res.status(req.status || 200).send(req.responseHtml);
    if (req.data) return res.status(req.status||200).send(req.data);
    if (req.route) return res.status(200).send({status: 'ok'});
    return next();
};
