const app = require('../server');
const http = require('http');

/**
 * @constant
 * @type {!number}
 * @default
 */
const port = process.env.APP_PORT || 8080;
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => {
    console.log(`Transaction service listening at http://localhost:${port}`);
});
