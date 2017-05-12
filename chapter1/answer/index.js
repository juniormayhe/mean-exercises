var mongodb = require('mongodb');
var moviesFile = require('./movies');

var uri = 'mongodb://localhost:27017/movies';

mongodb.MongoClient.connect(uri, function(error, db){

   if (error){
      console.log( `>> Error: ${error.name} / ${error.message}` );
      process.exit(1);
   }

   //before inserting, let's delete all movies in existing collection
   console.log("Deleting movies...");
   db.collection('movies').remove({});
   console.log("..movies deleted\n");

   //insert each movie in movies JSON
   console.log("Inserting movies...");
   moviesFile.movies.forEach(function(movie){
      console.log(`..movie: ${movie.title}, ${movie.year}, ${movie.director}`);

      db.collection('movies').insert(movie, function(error, result){
         if (error){
            console.log( `>> Error: ${error.name} / ${error.message}` );
            process.exit(1);
	 }
         console.log(`..movie added: ${movie.title}, ${movie.year}, ${movie.director}`);
      });
   });
	//db.collections('movies').insert
});

