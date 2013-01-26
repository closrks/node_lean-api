module.exports.all = function(req, res, next) {
	res.send('testall');
}

module.exports.id = function(req, res, next) {
	res.send('testid');
}
