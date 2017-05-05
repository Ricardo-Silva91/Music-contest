'use strict';

exports.rootGET = function(args, res, next) {
  /**
   * base call (justo to check)
   * Justo to check if server is awake 
   *
   * returns String
   **/
  var examples = {};
  examples['application/json'] = "aeiou";
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.userExistsGET = function(args, res, next) {
  /**
   * check username
   * check if username exists
   *
   * user String The username
   * returns Ok_res
   **/
  var examples = {};
  examples['application/json'] = {
  "result" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

