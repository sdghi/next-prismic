import React from 'react';
import Link from './Link';

export default function NavigationPrimaryItem({ data }) {
    const { link, title } = data.primary;
    return (
        <li className="nav__nav-item">
            <Link link={link}>
                <a>{title[0].text}</a>
            </Link>
        </li>
    );
}
