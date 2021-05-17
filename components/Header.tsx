import Link from 'next/link';
import { siteInfo } from '../siteInfo';
import Navigation from '@/components/Navigation';

export default function Header({ navigation }) {
    return (
        <header className="[ site_header ]">
            <div className="[ site_header__inner ] [ container w_100 flex ai_center jc_between ]">
                <h1 className="site_header__branding">
                    <Link href="/">
                        <a>{siteInfo.siteName}</a>
                    </Link>
                </h1>
                <Navigation navigation={navigation} />
            </div>
        </header>
    );
}
