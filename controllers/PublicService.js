'use strict';

var fs = require("fs");
var async = require("async");

var paths = require('./../paths');
var general_operations = require('./general_operations');

exports.rootGET = function (args, res, next) {
    /**
     * base call (justo to check)
     * Justo to check if server is awake
     *
     * returns String
     **/
    var examples = {};
    examples['application/json'] = "Music contest says: Good evening...";
    if (Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
        res.end();
    }
}

exports.userExistsGET = function (args, res, next) {
    /**
     * check username
     * check if username exists
     *
     * user String The username
     * returns Ok_res
     **/
    var examples = {};
    examples['application/json'] = {
        "result": "aeiou"
    };
    if (Object.keys(examples).length > 0) {

        console.log('loginPOST: entered');

        var username = args.user.value;

        var filesPath = [paths.users_path];

        async.map(filesPath, function (filePath, cb) { //reading files or dir
                fs.readFile(filePath, 'utf8', cb);
            }, function (err, results) {

                var users = JSON.parse(results[0]);

                var userPos = general_operations.getUserPosByName(users, username);

                if (userPos > -1) {
                    examples = {
                        result: "success",
                    };

                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(examples, null, 2));

                }
                else {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({
                        result: "fail",
                        code: -1,
                        message: "user not found",
                        fields: "username"
                    }));

                }


            }
        );
    } else {
        res.end();
    }
}

