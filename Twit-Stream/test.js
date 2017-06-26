var Stream = require('user-stream');
var stream = new Stream({
    consumer_key: "dZd9ImztjhytseskU7H4YlCai",
    consumer_secret: "d0tXYkQfaeeq6yFGBEIhqCmLOcVw493hcpZBHjYGg3VbtqpppW",
    access_token_key: "2444492528-UWWhnUcovEa1iGUDnn4dNEX8lXQnbJW2ZrIlKbR",
    access_token_secret: "PXnp58E5L5MC0LRfrfFMteqCdDpLEII5HjzXx4hXi9vAB"
});

//create stream
stream.stream();

//listen stream data
stream.on('data', function(json) {
  console.log(json);
});