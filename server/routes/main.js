const express = require('express'); 
const router = express.Router();
const useragent = require('express-useragent');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
    return res.render('index', {title: 'Home'});
});

module.exports = router;