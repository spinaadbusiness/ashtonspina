var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	imageData = {
		imageUrl : [
				'https://cdn.pixabay.com/photo/2013/07/12/17/47/test-pattern-152459_960_720.png'
		],
		description : 'Test Image'
	}
  	res.render('career', { imageData });
});

module.exports = router;
