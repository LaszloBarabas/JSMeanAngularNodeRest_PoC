


module.exports = function (app, express ) {
	// load the route middleware
	var router	= express.Router();

	// set the default route
	// and export the route (moduel)  



	// middleware to use for all requests
	router.use(function(req, res, next) {
		// do logging
		console.log('Something is happening.');
		next(); // make sure we go to the next routes and don't stop here
	});




	// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
	router.get('/', function(req, res) {
		//res.json({ message: 'hooray! welcome to our api!' });
		res.sendfile('./public/index.html');
	});



	// on routes that end in /demolist/:demoID
	// ----------------------------------------------------
	router.route('/demolist/:demoID')

		// get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
		.get(function(req, res) {


			var respRandomValue = Math.floor(Math.random() * 10 + 1) ;
			console.log('request  description: ', respRandomValue);
			res.json({type: true, data: 'Answer for the pull-branch v3.0: ' + respRandomValue});


		});




	// REGISTER OUR ROUTES -------------------------------
	// all of our routes will be prefixed with /api
	app.use('/', router);


};
/** 
module.exports = function (app) {
	app.get('*', function (req, res) {

		res.sendfile('./public/index.html'); 
	}) 
}

*/ 
