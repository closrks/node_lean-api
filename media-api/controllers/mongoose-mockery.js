var mongoose = require('mongoose');

var Mockery = function(data) {

	var _connection = mongoose.createConnection('host', 'db', 123);

	_connection.model = function (model, schema) {

		var modelInstance = function() {
			{};
		};

		modelInstance.find = function(condition, fields, options, callback) {
			callback(null, data);
		};

		return modelInstance;

	};

	return {
		connection: _connection
	}

};

module.exports = Mockery;