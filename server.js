var express= require('express');

var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("Listening on port %s.", PORT);
  }
})
