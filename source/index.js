const express = require('express');
const morgan = require('morgan');
const path = require ('path');
const handlebars = require('express-handlebars');

//initializations
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
// app.engine('.hbs', handlebars
// ({
//  defaultLayout: 'main',
//  layoutsDir: path.join(app.get('views'), 'layouts'),
//  partialsDir: path.join(app.get('views'), 'partials'),
//  extname: '.hbs',
//  helpers: require('./lib/handlebars')
// }));
// app.set('view engine', '.hbs');
//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//Global variables
app.use((req, res, next) =>
{
    next();
});
//Routes
app.use(require('./routes/index.js'));

//Public

//Starting the server

app.listen(app.get('port'), () => 
{
    console.log('Server on port', app.get('port'));
});