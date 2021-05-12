import Prismic from 'prismic-javascript';
import { apiEndpoint } from '../prismic-configuration';

export const routes = [
    {
        type: 'page',
        path: '/:uid'
    }
];

export const Client = (req = null, options = {}) =>
    Prismic.client(apiEndpoint, Object.assign({ routes }, options));
