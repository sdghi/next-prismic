import Link from 'next/link';
import { linkResolver } from '../utils';

export default function ResolvedLink({ link, children }) {
    return (
        <Link as={linkResolver(link)} href={linkResolver(link)}>
            {children}
        </Link>
    );
}
