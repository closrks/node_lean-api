var mongoose = require('mongoose');

function MediaDB(host, port, database) {
	
	this.connection = host instanceof mongoose.Connection
		? host
		: mongoose.createConnection('localhost', 'AVTimeViewDB', 27017);

	this.command = {
		  aggregate: 'media'
		, pipeline: [
			{ $match: {} },
			{ $project: 
					{
						_id: 0,
						startDate: 1,
						type: 1,
						headline: 1,
						text: 1,
						asset: 
							{
								media: '$media',
								credit: '$credit',
								caption: '$caption'
							}
					}
			},
			{ $sort: { startDate: 1 } }
		]
	}

};

MediaDB.prototype.all = function(callback) {

	this.connection.db.executeDbCommand(this.command, function(err, result) {
		if (err) callback(err);
		else callback(null, result.documents[0].result);
	});

};

module.exports = MediaDB;