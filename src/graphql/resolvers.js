require('@babel/polyfill');
const ProfileResolver = require('./resolvers/profile.resolver');

function resolve(app) {
  const profileResolver = ProfileResolver(app);

  app.resolvers = {...profileResolver};
}

module.exports = resolve;