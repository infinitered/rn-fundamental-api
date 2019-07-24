var deployd = require('deployd');

var server = deployd({
  port: process.env.PORT || 5000,
  env: 'development',
  db: {
    connectionString: process.env.MONGODB_URI,
  }
});

server.listen();

server.on('listening', function() {
  console.log("Server is listening");
});

server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});