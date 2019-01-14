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
		test.expect(6);
		test.equal(this.cache.first.key, "b", "Should be 'b'");
		test.equal(this.cache.last.key, "e", "Should be 'e'");
		test.equal(this.cache.size, 4, "Should be '4'");
		this.cache.evict();
		test.equal(this.cache.first.key, "c", "Should be 'c'");
		test.equal(this.cache.last.key, "e", "Should be 'e'");
		test.equal(this.cache.size, 3, "Should be '3'");
		test.done();
	}
};
