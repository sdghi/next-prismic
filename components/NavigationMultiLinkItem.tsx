import React from 'react';
import Link from './Link';

export default function NavigationMultiLinkItem({ data }) {
    const { link, title } = data.primary;
    const sublinks = data.items;
    return (
        <li className="nav__nav-item">
            <Link link={link}>{title[0].text}</Link>

            <ul className="nav__sublinks">
                {sublinks.map((sublink, index) => (
                    <li key={index} className="nav__sublink">
                        <Link link={sublink.link}>{sublink.title[0].text}</Link>
                    </li>
                ))}
            </ul>
        </li>
    );
}
