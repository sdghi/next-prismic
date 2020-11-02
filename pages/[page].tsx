import { client } from '../prismic-configuration';
import Prismic from 'prismic-javascript';
import MetaInfo from '../components/MetaInfo';
import SlicesContainer from '../components/SlicesContainer';

export default function Page({ page }) {
    const { title, description, body } = page.data;

    return (
        <>
            <MetaInfo title={title[0].text} description={description[0].text} />
            <SlicesContainer slices={body} />
        </>
    );
}

export async function getStaticProps(context: any) {
    const navigation = await client.getSingle('navigation', {});
    const page = await client.getByUID('page', context.params.page, {}, null);

    return { props: { navigation, page } };
}

export async function getStaticPaths() {
    const allPages = await client.query(Prismic.Predicates.at('document.type', 'page'));

    return {
        paths: allPages.results.map(({ uid }) => `/${uid}`) || [],
        fallback: false
    };
}
