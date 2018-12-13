const Auth = require('./controllers/auth');

module.exports = function(app) {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  app.post('/api/signup', Auth.signup);
  app.post('/api/login', Auth.login);
};