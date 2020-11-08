import React, { useEffect, useState } from 'react';
import NavigationPrimaryItem from './NavigationPrimaryItem';
import NavigationMultiLinkItem from './NavigationMultiLinkItem';

export default function Navigation({ navigation }) {
    const [navigationItems, setNavigationItems] = useState(null);

    useEffect(() => {
        if (navigation.data) {
            setNavigationItems(navigation.data.body);
        }
    }, [navigation]);

    return (
        <nav>
            {navigationItems && (
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
            )}
        </nav>
    );
}
