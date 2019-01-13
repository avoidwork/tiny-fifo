"use strict";

const path = require("path"),
	fifo = require(path.join("..", "lib", "tiny-fifo.js"));

exports.simple = {
	setUp: function (done) {
		this.cache = fifo(4);
		this.items = ["a", "b", "c", "d", "e"];
		done();
	},
	test: function (test) {
		this.items.forEach(i => this.cache.set(i, false));
		test.expect(4);
		test.equal(JSON.stringify(this.cache.order), JSON.stringify(["b", "c", "d", "e"]), `Should be '${JSON.stringify(["b", "c", "d", "e"])}'`);
		test.equal(this.cache.size, 4, "Should be '4'");
		this.cache.evict();
		test.equal(JSON.stringify(this.cache.order), JSON.stringify(["c", "d", "e"]), `Should be '${JSON.stringify(["c", "d", "e"])}'`);
		test.equal(this.cache.size, 3, "Should be '3'");
		test.done();
	}
};
