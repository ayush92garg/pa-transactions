import {createClient} from 'redis';

const creds = {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || '6379',
};
const endpoint = `http://${creds.host}:${creds.port}`;

const client = createClient(creds);

client.on('error', function(err) {
    console.info('Redis Could Not Connect at ' + endpoint);
});

client.on('connect', function() {
    console.info('Redis Connected Successfully at ' + endpoint);
});

module.export = client;
