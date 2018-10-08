const foo = require('./foo/foo.service.js');
const profile = require('./profile/profile.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(foo);
  app.configure(profile);
};
