# PA- Transactions

# Requirements
- Node 11.2+
- Mysql 5.6+

### Application Start
```
$ npm start
```

### Application Test
```
$ npm test
```

### MySQL Schema
```sh
CREATE TABLE `transactions` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `transaction_id` int(11) NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `amount` float NOT NULL,
  `type` varchar(25) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `transaction_id` (`transaction_id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4;
```
### API Endpoints

```
PUT /transactionservice/transaction/$transaction_id
```
```
GET /transactionservice/transaction/$transaction_id
```
```
GET /transactionservice/types/$type
```
```
GET /transactionservice/sum/$transaction_id
```
