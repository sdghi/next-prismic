import Document, { Html, Head, Main, NextScript } from 'next/document';

import { apiEndpoint } from './../prismic-configuration'; // import the endpoint name from where it's defined
const prismicRepoName = /([a-zA-Z0-9-]+)?(\.cdn)?\.prismic\.io/.exec(apiEndpoint)[1]; //Regex to get repo ID

export default class extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <script
                        async
                        defer
                        src={`//static.cdn.prismic.io/prismic.js?repo=${prismicRepoName}&new=true`}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
