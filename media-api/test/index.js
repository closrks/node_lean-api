var should = require('should');
var Controller = require('../controllers');
var Mockgoose = require('../../mothergoose/mockgoose.js');

describe('#controllers', function() {

	describe('#find()', function () {

		it('should return array of media as a json', function (done) {

            var mockConnection = Mockgoose({data: [1,2,3]});
            var controller = new Controller({connection: mockConnection});

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
                send: function (content) {
                    console.log(content);
                    should.exist(content);
                    done();
                }
            };

            var next = function (err) {
                should.not.exist(err);
                done();
            };

            controller.index(req, res, next);
		});

	});
});