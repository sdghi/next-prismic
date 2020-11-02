import '../styles/globals.scss';
// import Navigation from '../components/Navigation';

function MyApp({ Component, pageProps }) {
    return (
        <>
            {/* <Navigation /> */}
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
