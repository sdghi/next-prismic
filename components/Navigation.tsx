import React, { useEffect, useState } from 'react';
import { siteInfo } from '../siteInfo';
import NavigationPrimaryItem from './NavigationPrimaryItem';
import NavigationMultiLinkItem from './NavigationMultiLinkItem';

export default function Navigation() {
    const [navItems, setNavItems] = useState([]);

    const isProduction = process.env.NODE_ENV === 'production';
    const server = isProduction ? 'sitename-url' : 'http://localhost:3000';

    async function getNavItems() {
        const res = await fetch(`${server}/api/navigation`);
        const result = await res.json();
        setNavItems(result);
    }

    useEffect(() => {
        getNavItems();
    }, []);

    if (!navItems) return null;

    return (
        <nav>
            <div className="container nav__nav-container">
                <h1 className="nav__site-branding">{siteInfo.siteName}</h1>
                <ul className="nav__nav-items" data-testid="nav-items-container">
                    {navItems.map((item, index) => {
                        const res = (() => {
                            switch (item.slice_type) {
                                case 'primary_item':
                                    return <NavigationPrimaryItem key={index} data={item} />;
                                case 'multi-link_item':
                                    return <NavigationMultiLinkItem key={index} data={item} />;
                                default:
                                    return null;
                            }
                        })();

                        return res;
                    })}
                </ul>
            </div>
        </nav>
    );
}
