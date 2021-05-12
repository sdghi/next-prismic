import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Homepage() {
    const router = useRouter();
    useEffect(() => {
        router.push('/');
    }, []);
    return (
        <div>
            <Head>Homepage</Head>
        </div>
    );
}
