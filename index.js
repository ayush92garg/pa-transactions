import express from 'express';
import morgan from 'morgan';
import {json, urlencoded} from 'body-parser';
import {createServer} from 'http';

// express app instance
const app = express();

// log each api request before processing
app.use(morgan(':method :url :status - :response-time ms'));

// attach access control headers for request
app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

// middlewares
app.use(json());
app.use(urlencoded({extended: true}));

// api routers
app.use('/api/app', require('./api/app/'));


const port = process.env.APP_PORT || 8080;

const server = createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
