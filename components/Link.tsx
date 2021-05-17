import Link from 'next/link';
import { linkResolver } from '@/utils/linkResolver';

export default function ResolvedLink({ link, children }) {
    if (link.link_type === 'Web')
        return (
            <a href={link.url} target={link.target ? link.target : 'self'} rel="noreferrer">
                {children}
            </a>
        );

    return (
        <Link as={linkResolver(link)} href={linkResolver(link)}>
            {children}
        </Link>
    );
}
