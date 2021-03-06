const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();

//Pulls data from the public folder
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set handlebars.
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//Import routes and gives server access to them.
const routes = require('./controllers/burgers_controller.js');

app.use(routes);

app.listen(PORT, function(){
    console.log('Server listening on: http://localhost:' + PORT);
});