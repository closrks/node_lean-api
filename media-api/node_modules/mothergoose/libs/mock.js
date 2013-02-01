var mongoose = require('mongoose');

function dbresult(config, callback) {
	if (config && config.error) callback(new Error('dberror'));
	else if (config && config.data) callback(null, config.data);
	else callback(null, []);
};

var Mockgoose = function(config) {

	var connection = mongoose.createConnection('host', 'db', 123);

	connection.model = function (model, schema) {

		var modelInstance = function() {
			{};
		};

		modelInstance.find = function(condition, fields, options, callback) {
			dbresult(config, callback);
		};

		return modelInstance;

	};

	connection.db = {
		executeDbCommand: function(command, callback) {
			dbresult(config, callback);
		}
	};

	return connection

};

module.exports = Mockgoose;