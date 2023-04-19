const mysql = require('mysql');

let connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'alabaganne',
	password: 'ala50101959',
	database: 'saraha'
});

connection.connect(function(err) {
	if(err) throw err;
	console.log('Connected to the dabase');
});

module.exports = connection;