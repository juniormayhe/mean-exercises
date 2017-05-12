var mongoose = require('mongoose');
var schema = require('./schema');
mongoose.set('debug',true);
mongoose.connect('mongodb://localhost:27017/test');
//set promise to supress deprecation warning
mongoose.Promise = global.Promise;

// Parameters are: model name, schema, collection name
var User = mongoose.model('User', schema, 'users');
//remove all  docs in mongoose model
//user.remove({}).exec();

var user = new User({
  name: 'John Smith',
  email: 'john@smith.io'
});

user.save()
.then(saved=> {
  console.log(`...Saved: ${saved.name}`);

  console.log("...Listing all users...");
  User.find({ email: 'john@smith.io' }, function(error, docs) {
    console.log(require('util').inspect(docs));
    process.exit(0);  });

})
.catch(function(error) {
  if (error) {
    console.log(error);
    process.exit(1);
  }
}
);

