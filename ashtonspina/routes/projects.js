var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	imageData = {
		imageUrl : [
				'./images/projects/whatTheWorld.png',
				'./images/projects/dynamicBusScheduler.png',
				'./images/projects/wander.png'
		],
		description : 'Test Image'
	}
  	res.render('projects', { imageData });
});

module.exports = router;
