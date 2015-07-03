"use strict";

var exec = require('child_process').exec;

module.exports = function(callback, argv) {
    var command = 'find .';
    if (typeof argv === 'undefined') {
        argv = {};
    }
    if (typeof argv.dir === 'string') {
        command += '/' + argv.dir;
    }
    if (typeof argv.name === 'string') {
        command += ' -name "*.'+argv.name+'"';
    }
    if (typeof argv.exclude === 'string') {
        command += ' -not -path "./'+argv.exclude+'/*"';
    }

    exec(command,
        function(error, stdout, stderr) {
            var result = stdout.split('\n').filter(function(str) {
                return str !== "";
            });
            if (error !== null) {
                callback({
                    error: stderr
                });
                return;
            }
            callback(result);
        });
};
