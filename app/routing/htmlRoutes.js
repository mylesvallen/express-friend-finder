//this file is used to 
//help direct the user, 
//when they click on a link, 
//the router will understand based on the info i this file 

var path = require('path');

module.exports = function(app) {
    app.get('/survey', function(require, response) {
        response.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    app.use(function(require, response) {
        response.sendFile(path.join(__dirname + '/../public/home.html'));
    });

};