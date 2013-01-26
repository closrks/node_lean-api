var media = require('../routes');
var should = require('should');

describe('media-api', function() {

	describe('#find()', function () {

		it('should return array of media as a json', function (done) {

			var req = {
                query: {},
                body: {},
				accepts: function (contentType) {
                    return true; // Accepts application/json
                }
            };

            var res = {
            	header: function() {},
                contentType: function (contentType) { },
                send: function (media) {
                    should.exist(media);
                    done();
                }
            };

            var next = function (err) {
                should.not.exist(err);
                done();
            };

            media.find(req, res, next);
		});

	});
});