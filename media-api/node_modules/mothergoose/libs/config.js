var mongoose = require('mongoose');

var Config = function (options) {

	var _connection = options && options.connection ? options.connection : null;
	var _host = options && options.host ? options.host : 'localhost';
	var _port = options && options.port ? options.port : 27017;
	var _dbName = options && options.dbName ? options.dbName : 'db';
	var _collectionName = options && options.collectionName ? options.collectionName : 'collection';
	var _modelName = options && options.modelName ? options.modelName : 'model';
	var _schema = options && options.schema ? options.schema : {}

	return {
		connection: _connection
		, host: _host
		, port: _port
		, dbName: _dbName
		, collectionName: _collectionName
		, modelName: _modelName
		, schema: _schema
	};
};

module.exports = Config;