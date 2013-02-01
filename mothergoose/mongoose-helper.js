var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Connection = mongoose.Connection;

//constructor
function Helper(config) {
	
	this.connection = config.connection instanceof Connection
		? config.connection
		: mongoose.createConnection(config.host, config.dbName, config.port);

	var schema = new Schema(config.schema, { collection: config.collectionName });

	this.model = this.connection.model(config.modelName, schema);
};

// public function
Helper.prototype.index = function (conditions, fields, options, callback) {
	this.model.find(conditions, fields, options, function (err, results) {
		callback(err, results);
	});
};

module.exports = Helper;
