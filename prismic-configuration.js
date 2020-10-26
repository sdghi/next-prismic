require('dotenv').config();

import Prismic from 'prismic-javascript';

export const apiEndpoint = process.env.PRISMIC_ENDPOINT;
export const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

export const client = Prismic.client(apiEndpoint, { accessToken: accessToken });
