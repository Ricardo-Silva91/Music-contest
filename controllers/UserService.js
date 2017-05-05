'use strict';

exports.enterCandidatePOST = function(args, res, next) {
  /**
   * add new song to the current contest
   * add new song to the current contest (only requires videoId) 
   *
   *  Candidate parameters for the entry.
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

exports.getCurrentContestGET = function(args, res, next) {
  /**
   * get songs in current contest
   * get array of songs in current contest (along with score) 
   *
   * token String The user's token
   * returns Current_contest
   **/
  var examples = {};
  examples['application/json'] = "";
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.loginPOST = function(args, res, next) {
  /**
   * login
   * user sends credentials and gets token.
   *
   * body Login_info request. (optional)
   * returns login_res
   **/
  var examples = {};
  examples['application/json'] = {
  "result" : "aeiou",
  "user_type" : "aeiou",
  "token" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.registerPOST = function(args, res, next) {
  /**
   * register
   * user sends initial info and registers.
   *
   * body Register_info request. (optional)
   * returns login_res
   **/
  var examples = {};
  examples['application/json'] = {
  "result" : "aeiou",
  "user_type" : "aeiou",
  "token" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.voteForCandidatePOST = function(args, res, next) {
  /**
   * vote for the song to play next
   * vote for the song you want to play next (only one vote per user) 
   *
   *  CandidateVote parameters for the vote.
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

