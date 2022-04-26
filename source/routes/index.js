const home = require('./home');
const log_in = require('./log_in');
const quiz = require('./quiz');
const genero = require('./genero');

function routerApi(app)
{
  app.use('/home', home);
  app.use('/log_in', log_in);
  app.use('/quiz', quiz);
  app.use('/genero', genero);
}


module.exports = routerApi;