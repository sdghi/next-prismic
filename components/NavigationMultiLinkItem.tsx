import Link from '@/components/Link';

export default function NavigationMultiLinkItem({ data }) {
    const { link, label } = data.primary;
    const sublinks = data.items;
    return (
        <li className="[ nav__multi_item ] [ nav_item ]">
            <Link link={link}>{label[0].text}</Link>

            <ul className="nav__sublinks" role="list">
                {sublinks.map((sublink, index) => (
                    <li key={index} className="nav__sublink">
                        <Link link={sublink.link}>{sublink.label[0].text}</Link>
                    </li>
                ))}
            </ul>
        </li>
    );
}
