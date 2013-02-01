// var mongo = require('mongodb');

// var   Server = mongo.Server
//     , Db = mongo.Db
//     , BSON = mongo.BSONPure;

// var server = new Server('localhost', 27017, {auto_reconnect: true});
// db = new Db('AVTimeViewDB', server, {safe: true});

// db.open(function(err, db) {
// 	if(!err) {
// 		console.log('Connected to AVTimeViewDB database');
// 		db.collection('media', {safe: true}, function(err, collection) {
// 			if(err) {
// 				console.log('the media collection doesnt exist');
// 			}
// 		});
// 	}
// });
var DbHelper = require('../../mothergoose/mongoose-helper.js');

function Controller(dbconfig) {
	this.dbhelper = new DbHelper(dbconfig);
};

Controller.prototype.index = function(req, res, next) {
    this.dbhelper.index({}, null, null, function(err, results) {
        res.send(results);
    });

    // db.collection('media', function(err, collection) {
	// 	collection.find().toArray(function(err, items) {
	// 		res.send(items);
	// 	});
	// });
};

module.exports = Controller;

// exports.find = function(req, res, next) {
// 	var id = req.params.id;
//     console.log('Retrieving media: ' + id);
// 	db.collection('media', function(err, collection) {
// 		collection.find({_id: new BSON.ObjectID(id)}).toArray(function(err, items) {
// 			res.send(items);
// 		});
// 	});
// };

// exports.insert = function(req, res, next) {
//     var media = req.body;
//     console.log('Adding media: ' + JSON.stringify(media));
//     db.collection('media', function(err, collection) {
//         collection.insert(media, {safe:true}, function(err, result) {
//             if (err) {
//                 res.send({'error':'An error has occurred'});
//             } else {
//                 console.log('Success: ' + JSON.stringify(result[0]));
//                 res.send(result[0]);
//             }
//         });
//     });
// };

// exports.update = function(req, res, next) {
//     var id = req.params.id;
//     var media = req.body;
//     delete media._id;
//     console.log('Updating media: ' + id);
//     console.log(JSON.stringify(media));
//     db.collection('media', function(err, collection) {
//         collection.update({'_id':new BSON.ObjectID(id)}, media, {safe:true}, function(err, result) {
//             if (err) {
//                 console.log('Error updating media: ' + err);
//                 res.send({'error':'An error has occurred'});
//             } else {
//                 console.log('' + result + ' document(s) updated');
//                 res.send(media);
//             }
//         });
//     });
// };

// exports.delete = function(req, res, next) {
//     var id = req.params.id;
//     console.log('Deleting media: ' + id);
//     db.collection('medias', function(err, collection) {
//         collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
//             if (err) {
//                 res.send({'error':'An error has occurred - ' + err});
//             } else {
//                 console.log('' + result + ' document(s) deleted');
//                 res.send(req.body);
//             }
//         });
//     });
// };