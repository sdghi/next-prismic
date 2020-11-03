import { RichText } from 'prismic-reactjs';
import Prismic from 'prismic-javascript';
import { client } from '@/utils/prismic-configuration';
import MetaInfo from '@/components/MetaInfo';

export default function Post({ post }) {
    const {
        meta_title,
        meta_description,
        content,
        document_name,
        tags,
        featured_image
    } = post.data;

    return (
        <>
            <MetaInfo title={meta_title[0].text} description={meta_description[0].text} />
            <article className="container">
                {featured_image && <img src={featured_image.url} alt={featured_image.alt} />}
                {RichText.render(document_name)}
                <div>{RichText.render(content)}</div>
                <div>
                    <h2>Tags</h2>

                    <ul>
                        {tags.map(({ tag }) => (
                            <li key={tag.id}>{tag.slug}</li>
                        ))}
                    </ul>
                </div>
            </article>
        </>
    );
}

export async function getStaticProps(context: any) {
    const navigation = await client.getSingle('navigation', {});
    const post = await client.getByUID('blog_post', context.params.post, {}, null);

    return { props: { navigation, post } };
}

export async function getStaticPaths() {
    const allPosts = await client.query(Prismic.Predicates.at('document.type', 'blog_post'));

    return {
        paths: allPosts.results.map(({ uid }) => `/blog/${uid}`) || [],
        fallback: false
    };
}
