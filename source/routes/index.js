const home = require('./home');
const log_in = require('./log_in');

function routerApi(app)
{
  app.use('/home', home);
  app.use('/log_in', log_in);
}


module.exports = routerApi;