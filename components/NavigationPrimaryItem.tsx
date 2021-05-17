import Link from '@/components/Link';

export default function NavigationPrimaryItem({ data }) {
    const { link, label } = data.primary;
    return (
        <li className="[ nav_item ]">
            <Link link={link}>{label[0].text}</Link>
        </li>
    );
}
