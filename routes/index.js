var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	imageData = {
		imageUrl : [
				'./images/home/ashtonProfile.jpg'
		],
		description : 'Ashton Spina\'s Profile'
	}
  	res.render('index', { imageData });
});

module.exports = router;
