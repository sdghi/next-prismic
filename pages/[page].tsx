import Prismic from 'prismic-javascript';
import { client } from '@/utils/prismic-configuration';
import MetaInfo from '@/components/MetaInfo';
import SlicesContainer from '@/components/SlicesContainer';

export default function Page({ page }) {
    const { meta_title, meta_description, body } = page.data;

    return (
        <>
            <MetaInfo title={meta_title[0].text} description={meta_description[0].text} />
            <SlicesContainer slices={body} />
        </>
    );
}

export async function getStaticProps(context: any, { preview = null, previewData = {} }) {
    const { ref } = previewData;
    const navigation = await client.getSingle('navigation', {});
    const page = await client.getByUID('page', context.params.page, ref ? { ref } : null, null);

    return { props: { navigation, page, preview } };
}

export async function getStaticPaths() {
    const allPages = await client.query(Prismic.Predicates.at('document.type', 'page'));

    return {
        paths: allPages.results.map(({ uid }) => `/${uid}`) || [],
        fallback: false
    };
}
