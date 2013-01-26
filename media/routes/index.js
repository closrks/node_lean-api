var mongo = require('mongodb');

var   Server = mongo.Server
    , Db = mongo.Db
    , BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('mediadb', server, {safe: true});

db.open(function(err, db) {
	if(!err) {
		console.log('Connected to mediadb database');
		db.collection('media', {safe: true}, function(err, collection) {
			if(err) {
				console.log('the media collection doesnt exist');
				populateDB();
			}
		});
	}
});

exports.find = function(req, res, next) {
	db.collection('media', function(err, collection) {
		collection.find().toArray(function(err, items) {
			res.send(items);
		});
	});
};

exports.findOne = function(req, res, next) {
	var id = req.params.id;
    console.log('Retrieving media: ' + id);
	db.collection('media', function(err, collection) {
		collection.findOne({_id: new BSON.ObjectID(id)}, function(err, items) {
			res.send(items);
		});
	});
};

exports.insert = function(req, res, next) {
    var media = req.body;
    console.log('Adding media: ' + JSON.stringify(media));
    db.collection('media', function(err, collection) {
        collection.insert(media, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
};

exports.update = function(req, res, next) {
    var id = req.params.id;
    var media = req.body;
    delete media._id;
    console.log('Updating media: ' + id);
    console.log(JSON.stringify(media));
    db.collection('media', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, media, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating media: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(media);
            }
        });
    });
};

exports.delete = function(req, res, next) {
    var id = req.params.id;
    console.log('Deleting media: ' + id);
    db.collection('medias', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
};

var populateDB = function() {

    var media = [
    {
        name: "LAN RIOJA CRIANZA",
        year: "2006",
        grapes: "Tempranillo",
        country: "Spain",
        region: "Rioja",
        description: "A resurgence of interest in boutique vineyards has opened the door for this excellent foray into the dessert media market. Light and bouncy, with a hint of black truffle, this media will not fail to tickle the taste buds.",
        picture: "lan_rioja.jpg"
    },
    {
        name: "MARGERUM SYBARITE",
        year: "2010",
        grapes: "Sauvignon Blanc",
        country: "USA",
        region: "California Central Cosat",
        description: "The cache of a fine Cabernet in ones media cellar can now be replaced with a childishly playful media bubbling over with tempting tastes of black cherry and licorice. This is a taste sure to transport you back in time.",
        picture: "margerum.jpg"
    },
    {
        name: "OWEN ROE \"EX UMBRIS\"",
        year: "2009",
        grapes: "Syrah",
        country: "USA",
        region: "Washington",
        description: "A one-two punch of black pepper and jalapeno will send your senses reeling, as the orange essence snaps you back to reality. Don't miss this award-winning taste sensation.",
        picture: "ex_umbris.jpg"
    }];

    db.collection('media', function(err, collection) {
        collection.insert(media, {safe:true}, function(err, result) {});
    });

};