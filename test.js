"use strict";

var assert = require('assert');
var find = require('./');

assert.equal(typeof find, 'function');

function callback1(result) {
    assert.equal(Array.isArray(result), true);
    assert.deepEqual(result, [".",
        "./index.js",
        "./package.json",
        "./README.md",
        "./test.js",
        "./testdir",
        "./testdir/a.js",
        "./testdir/b.js"]);
}
find(callback1);

function callback2(result) {
    assert.equal(Array.isArray(result), true);
    assert.deepEqual(result, [
        "./testdir",
        "./testdir/a.js",
        "./testdir/b.js"]);
}
find(callback2, {
    dir: 'testdir'
});

function callback3(result) {
    assert.equal(Array.isArray(result), true);
    assert.deepEqual(result, [
        "./package.json"]);
}
find(callback3, {
    name: 'json'
});


function callback4(result) {
    assert.equal(Array.isArray(result), true);
    assert.deepEqual(result, [
        "./testdir/a.js",
        "./testdir/b.js"]);
}
find(callback4, {
    dir: 'testdir',
    name: 'js'
});
