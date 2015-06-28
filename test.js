"use strict";

var test = require('tape');
var find = require('./');

test('should exist', function(t) {
    t.equal(typeof find, 'function');
    t.end();
});

test('should return files from current dir and sub dirs', function(t) {
    find(function(result) {
        t.equal(Array.isArray(result), true);
        [
            ".",
            "./index.js",
            "./package.json",
            "./README.md",
            "./test.js",
            "./testdir",
            "./testdir/a.js",
            "./testdir/b.js"
        ].forEach(function(match) {
            t.assert(result.indexOf(match) > -1);
        });
    });
    t.end();
});

test('should return files from specific dir', function(t) {
    find(function(result) {
        t.equal(Array.isArray(result), true);
        t.deepEqual(result, [
            "./testdir",
            "./testdir/a.js",
            "./testdir/b.js"
        ]);
    }, {
        dir: 'testdir'
    });
    t.end();
});

test('should return files matching file prefix', function(t) {
    find(function(result) {
        t.equal(Array.isArray(result), true);
        t.assert(result.indexOf("./package.json") > -1);
        t.assert(result.indexOf("./index.js") < 0);
    }, {
        name: 'json'
    });
    t.end();
});

test('should return files matching file prefix in specific dir', function(t) {
    find(function(result) {
        t.equal(Array.isArray(result), true);
        t.deepEqual(result, [
            "./testdir/a.js",
            "./testdir/b.js"
        ]);
    }, {
        dir: 'testdir',
        name: 'js'
    });
    t.end();
});
