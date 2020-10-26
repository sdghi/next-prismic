import React from 'react';
import Head from 'next/head';
import { siteInfo } from '../siteInfo';

export default function MetaInfo({ title, description = siteInfo.metaDescription }) {
    return (
        <Head>
            <title>
                {title} | {siteInfo.siteName}
            </title>
            <meta property="og:title" content={`${title}`} key="title" />
            <meta name="description" content={`${description}`} key="description" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
