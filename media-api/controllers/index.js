var DbHelper = require('mothergoose').helper;

function MediaController(dbconfig) {
	this.db = new DbHelper(dbconfig);
};

MediaController.prototype.index = function(req, res, next) {
    this.db.model.find({}, null, null, function(err, results) {
        res.send(results);
    });
};

module.exports = MediaController;