import Link from 'next/link';
import { linkResolver } from '../utils';

export default function ResolvedLink({ href, children }) {
    return (
        <Link as={linkResolver(href)} href={linkResolver(href)}>
            {children}
        </Link>
    );
}
