const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.get("/", function(req, res) {
	connection.query(
		"SELECT * FROM posts",
		function(err, posts) {
			if(err) return res.status(500).send("Server error");

			res.send(posts);
		}
	)
});

router.post("/", function(req, res) {
	if(req.body.text && req.body.userId) {
		connection.query(
			"INSERT INTO posts SET userId = ?, text = ?",
			[req.body.userId, req.body.text],
			function(err, result) {
				if(err) return res.send(err);

				res.send("Post saved");
			}
		)
	} else {
		res.send("Missing required fields");
	}
});


module.exports = router