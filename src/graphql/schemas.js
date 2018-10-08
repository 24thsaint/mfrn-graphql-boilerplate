const { buildSchema } = require('graphql');

const mutations = require('./mutations');
const queries = require('./queries');
const typeDefinitions = require('./typeDefinitions');

const schema = new buildSchema(`
    ${typeDefinitions}

    ${queries}

    ${mutations}
`);

module.exports = schema;