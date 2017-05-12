/*
This file is used by test.js was previously provided by exercise
How to call this file in other files:

   var connect = require('connect');
   connect(function(error, db) {
      if (error) {
        return done(error);
      }
      db.collection('movies')....
*/
var mongodb = require('mongodb');
var uri = 'mongodb://localhost:27017/movies';

module.exports = function(callback) {
  mongodb.MongoClient.connect(uri, callback);
};
