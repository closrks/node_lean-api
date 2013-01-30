var mongoose = require('mongoose');

var StubDB = mongoose.createConnection("host", "database", 123);

StubDB.model = function (model, schema) {

	var modelInstance = function() {
		return {};
	};

	modelInstance.find = function(condition, fields, options, callback) {

		var result = [{_id}: 1];

		if(callback) {
			callback(null, result);
		}
	};

	return modelInstance;
};

module.exports = StubDB;