/*
 *  Inserts "doc" into the collection "movies".
 */
exports.insert = function(db, doc, callback) {
  
  //callback(null);
  //insert a movie into movies collection and keep callback
  db.collection('movies').insert(doc, callback);
};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
exports.byDirector = function(db, director, callback) {
  
  //callback(null, []);
  //we filter by director parameter, sort by title ascending, and convert cursor to array
  return db.collection('movies').find({'director': director}).sort({'title': 1}).toArray(callback);
};
