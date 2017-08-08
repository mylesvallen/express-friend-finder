//API routes for data 
//data see and data the user can post to the server
var friendFinderData = require('/data/friends.js');

module.exports = function(app) {
    app.get('/api/friends', function(require, response) {
        response.json(friendFinderData);
    });
};