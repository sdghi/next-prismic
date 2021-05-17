import Document, { Html, Head, Main, NextScript } from 'next/document';
import { client } from '@/utils/prismic-configuration';
import Header from '@/components/Header';

import { apiEndpoint } from './../prismic-configuration'; // import the endpoint name from where it's defined
const prismicRepoName = /([a-zA-Z0-9-]+)?(\.cdn)?\.prismic\.io/.exec(apiEndpoint)[1]; //Regex to get repo ID

export default class extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        const navigation = await client.getSingle('navigation', {});
        return { ...initialProps, navigation };
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
                <Header navigation={this.props.navigation} />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
