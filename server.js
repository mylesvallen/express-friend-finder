//modules needed for express 
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// require("./app/routing/apiRoutes")(app);
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

app.listen(PORT, function() {
    console.log("APP is LIVE on PORT: " + PORT);
});