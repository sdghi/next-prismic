import NavigationPrimaryItem from '@/components/NavigationPrimaryItem';
import NavigationMultiLinkItem from '@/components/NavigationMultiLinkItem';

export default function Navigation({ navigation }) {
    const navItems = navigation.data.body;

    return (
        <nav>
            <ul role="list">
                {navItems.map((item, index) => {
                    const res = (() => {
                        switch (item.slice_type) {
                            case 'primary_item':
                                return <NavigationPrimaryItem key={index} data={item} />;
                            case 'multi_link_item':
                                return <NavigationMultiLinkItem key={index} data={item} />;
                            default:
                                return null;
                        }
                    })();

                    return res;
                })}
            </ul>
        </nav>
    );
}
