
process.env.NODE_ENV = "test"

const chai = require('chai');
const chaiHttp = require('chai-http');
const transactions = require('../api/transactionservice/models/transactions');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

describe('/GET/:transactionId transactionservice/transaction', () => {
    it('it should Get the transaction for particular ID', (done) => {
        const transactionId = 10;
        chai.request(server)
            .get('/transactionservice/transaction/' + transactionId)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.have.header('content-type', 'application/json; charset=utf-8');
                res.body.should.be.a('object');
                res.body.should.have.property('transaction_id');
                res.body.should.have.property('amount');
                res.body.should.have.property('type');
                res.body.should.have.property('parent_id');
                done();
            });
    });
});

describe('GET /transactionservice/transaction/:transactionType', () => {
    it('it shold get all the transactions of a particualar type', (done) => {
        const transactionType = 'shopping';
        chai.request(server)
            .get('/transactionservice/type/' + transactionType)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.have.header('content-type', 'application/json; charset=utf-8');
                res.body.should.be.a('object');
                done();
            });
    });
});

describe('GET /transactionservice/sum/:transactionId', () => {
    it('it shold get  sum of all transactions that are transitively linked by the given id', (done) => {
        const transactionId = 10;
        chai.request(server)
            .get('/transactionservice/sum/' + transactionId)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.have.header('content-type', 'application/json; charset=utf-8');
                res.body.should.be.a('object');
                res.body.should.have.property('sum');
                done();
            });
    });
});

describe('PUT /transactionservice/transaction/:transactionId', () => {
    it('it should create a new transaction in DB with the given ID', (done) => {
        const transaction = {
            'amount': 10000,
            'type': 'shopping',
            'parent_id': 10,
        };
        const transactionId = 13;
        chai.request(server)
            .put('/transactionservice/transaction/' + transactionId)
            .send(transaction)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.have.header('content-type', 'application/json; charset=utf-8');
                res.body.should.be.a('object');
                res.body.should.have.property('status');
                done();
            });
    });
});

describe('PUT /transactionservice/transaction/:transactionId', () => {
    it('it should create a new transaction in DB with the given ID', (done) => {
        const transaction = {
            'amount': 10000,
            'type': 'shopping',
        };
        const transactionId = 13;
        chai.request(server)
            .put('/transactionservice/transaction/' + transactionId)
            .send(transaction)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.have.header('content-type', 'application/json; charset=utf-8');
                res.body.should.be.a('object');
                res.body.should.have.property('status');
                done();
            });
    });
});


describe('PUT /transactionservice/transaction/:transactionId', () => {
    it('it should create a new transaction in DB with the given ID', (done) => {
        const transaction = {
            'type': 'shopping',
            'parent_id': 10,
        };
        const transactionId = 13;
        chai.request(server)
            .put('/transactionservice/transaction/' + transactionId)
            .send(transaction)
            .end((err, res) => {
                res.should.have.status(400);
                res.should.have.header('content-type', 'application/json; charset=utf-8');
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });
});

describe('PUT /transactionservice/transaction/:transactionId', () => {
    it('it should create a new transaction in DB with the given ID', (done) => {
        const transaction = {
            'parent_id': 10,
        };
        const transactionId = 13;
        chai.request(server)
            .put('/transactionservice/transaction/' + transactionId)
            .send(transaction)
            .end((err, res) => {
                res.should.have.status(400);
                res.should.have.header('content-type', 'application/json; charset=utf-8');
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });
});

describe('PUT /transactionservice/transaction/:transactionId', () => {
    it('it should create a new transaction in DB with the given ID', (done) => {
        const transaction = {};
        const transactionId = 13;
        chai.request(server)
            .put('/transactionservice/transaction/' + transactionId)
            .send(transaction)
            .end((err, res) => {
                res.should.have.status(400);
                res.should.have.header('content-type', 'application/json; charset=utf-8');
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });
});


describe('PUT /transactionservice/transaction/:transactionId', () => {
    it('it should create a new transaction in DB with the given ID', (done) => {
        const transaction = {
            'amount': 1000,
        };
        const transactionId = 13;
        chai.request(server)
            .put('/transactionservice/transaction/' + transactionId)
            .send(transaction)
            .end((err, res) => {
                res.should.have.status(400);
                res.should.have.header('content-type', 'application/json; charset=utf-8');
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });
});

describe('PUT /transactionservice/transaction/:transactionId', () => {
    it('it should create a new transaction in DB with the given ID', (done) => {
        const transaction = {
            'amount': 'abcd',
        };
        const transactionId = 13;
        chai.request(server)
            .put('/transactionservice/transaction/' + transactionId)
            .send(transaction)
            .end((err, res) => {
                res.should.have.status(400);
                res.should.have.header('content-type', 'application/json; charset=utf-8');
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });
});