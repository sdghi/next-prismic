import '@/styles/globals.scss';
import Header from '@/components/Header';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header navigation={pageProps.navigation} />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
