import React, { useEffect, useState } from 'react';
import { siteInfo } from '../siteInfo';
import NavigationPrimaryItem from './NavigationPrimaryItem';
import NavigationMultiLinkItem from './NavigationMultiLinkItem';

export default function Navigation({ navigation }) {
    const navigationItems = navigation.data.body;

    return (
        <nav>
            <div className="container nav__nav-container">
                <h1 className="nav__site-branding">{siteInfo.siteName}</h1>
                <ul className="nav__nav-items" data-testid="nav-items-container">
                    {navigationItems.map((item, index) => {
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
