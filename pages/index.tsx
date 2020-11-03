import { client } from '../prismic-configuration';
import MetaInfo from '../components/MetaInfo';
import SlicesContainer from '../components/SlicesContainer';

export default function Home({ home }) {
    const { meta_title, meta_description, body } = home.data;
    return (
        <>
            <MetaInfo title={meta_title[0].text} description={meta_description[0].text} />
            <SlicesContainer slices={body} />
        </>
    );
}

export async function getStaticProps() {
    const navigation = await client.getSingle('navigation', {});
    const home = await client.getByUID('page', 'home', {}, null);

    return { props: { navigation, home } };
}
