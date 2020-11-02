import '../styles/globals.scss';
import Navigation from '../components/Navigation';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navigation navigation={pageProps.navigation} />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
