const { execSync } = require('child_process');
const Prismic = require('prismic-javascript');
const { client } = require('./prismic-configuration');

const gitCommand = 'git rev-parse HEAD';

module.exports = {
    target: 'serverless'
};
