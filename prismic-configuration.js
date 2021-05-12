require('dotenv').config();

import Prismic from 'prismic-javascript';

export const apiEndpoint = process.env.NEXT_PUBLIC_PRISMIC_ENDPOINT;
export const accessToken = process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN;

export const client = Prismic.client(apiEndpoint, { accessToken: accessToken });
