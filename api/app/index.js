// eslint-disable-next-line new-cap
const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('here');
    res.send({'message': 'app route'});
});


module.exports = router;
