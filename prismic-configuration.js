require('dotenv').config();

const Prismic = require('prismic-javascript');

const apiEndpoint = process.env.NEXT_PUBLIC_PRISMIC_ENDPOINT;
const accessToken = process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN;

const client = Prismic.client(apiEndpoint, { accessToken: accessToken });

module.exports = {
    apiEndpoint,
    accessToken,
    client
};
