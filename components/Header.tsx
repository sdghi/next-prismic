import React from 'react';
import Link from 'next/link';
import { siteInfo } from '../siteInfo';
import Navigation from '@/components/Navigation';

export default function Header({ navigation }) {
    return (
        <header className="site_header">
            <div className="[ site_header__inner ] [ container ]">
                <h1 className="site_header__branding">
                    <Link href="/">
                        <a className="site_header__branding__link">{siteInfo.siteName}</a>
                    </Link>
                </h1>
                <Navigation navigation={navigation} />
            </div>
        </header>
    );
}
