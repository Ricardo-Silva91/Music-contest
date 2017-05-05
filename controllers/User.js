'use strict';

var url = require('url');

var User = require('./UserService');

module.exports.enterCandidatePOST = function enterCandidatePOST (req, res, next) {
  User.enterCandidatePOST(req.swagger.params, res, next);
};

module.exports.getCurrentContestGET = function getCurrentContestGET (req, res, next) {
  User.getCurrentContestGET(req.swagger.params, res, next);
};

module.exports.loginPOST = function loginPOST (req, res, next) {
  User.loginPOST(req.swagger.params, res, next);
};

module.exports.registerPOST = function registerPOST (req, res, next) {
  User.registerPOST(req.swagger.params, res, next);
};

module.exports.voteForCandidatePOST = function voteForCandidatePOST (req, res, next) {
  User.voteForCandidatePOST(req.swagger.params, res, next);
};
