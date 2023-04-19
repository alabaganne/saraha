const router = require('express').Router();
const connection = require('../connection');

router.get('/', (req, res) => {
	connection.query('SELECT id, username, email FROM users', function(err, result) {
		if(err) return res.send(err);

		res.send(result);
	})
});

router.delete('/:id/', (req, res) => {
	connection.query('DELETE FROM users WHERE id = ' + req.params.id, function(err, result) {
		if(err) return res.send(err);

		res.send(result);
	});
})

router.post('/', (req, res) => {
	if(!req.body.email || !req.body.password || !req.body.username) {
		return res.send('Missing required fields');
	}
	// Code to save post in the database
	connection.query('INSERT INTO users (email, username, password) VALUES (?, ?, ?)',
	[req.body.email, req.body.username, req.body.password],
	function(err, result) {
		if(err) return res.send(err);

		res.send('User saved');
	});
});

module.exports = router;