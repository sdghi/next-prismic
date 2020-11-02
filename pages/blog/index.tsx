import Link from '../../components/Link';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { client } from '../../prismic-configuration';
import MetaInfo from '../../components/MetaInfo';

export default function Blog({ blog, allBlogPosts }) {
    const { title, description, featured_post } = blog.data;

    return (
        <>
            <MetaInfo title={title ? title[0].text : ''} description={description[0].text} />
            <div>
                <h3>Recent Posts</h3>
                {allBlogPosts.reverse().map((result) => {
                    console.log(result);
                    return (
                        <li key={result.id}>
                            <Link as={result} href={result}>
                                <a>{RichText.render(result.data.document_name)}</a>
                            </Link>
                        </li>
                    );
                })}
            </div>
        </>
    );
}

export async function getStaticProps() {
    const blog = await client.getSingle('blog', {}).then((res) => res);
    const allBlogPosts = await client.query(Prismic.Predicates.at('document.type', 'blog_post'), {
        orderings: '[document.first_publication_date]'
    });

    return { props: { blog, allBlogPosts: allBlogPosts.results.reverse() } };
}
