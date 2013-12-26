/* global describe, it */

(function () {
	"use strict";

	describe("A user represents the entity that creates messages.", function () {
		describe("Users default behaviour", function () {
			it("should have a default name if one isn't provided", function () {
				var user = new Chat.User.User();
				user.get("name").should.be.a("string");
				user.get("name").length.should.be.above(0);
			});
			it("should accept a name if given one", function () {
				var user = new Chat.User.User({
					name: "Joe Blogs"
				});
				user.get("name").should.equal("Joe Blogs");
			});
		});
	});
})();
