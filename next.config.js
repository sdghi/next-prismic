const { execSync } = require('child_process');
const Prismic = require('prismic-javascript');
const { client } = require('./prismic-configuration');

const gitCommand = 'git rev-parse HEAD';

module.exports = {
    generateBuildId: async () => {
        // You can, for example, get the latest git commit hash here
        return execSync(gitCommand).toString().trim();
    },
    exportPathMap: async () => {
        const paths = {
            '/': { page: '/' }
        };

        const allPages = await client.query(Prismic.Predicates.at('document.type', 'page'));
        const allPosts = await client.query(Prismic.Predicates.at('document.type', 'blog_post'));

        allPages.results.forEach((result) => {
            paths[`/${result.uid}`] = {
                page: `/[page]`,
                query: {
                    page: result.uid
                }
            };
        });

        allPosts.results.forEach((result) => {
            paths[`/${result.uid}`] = {
                page: `/blog/[post]`,
                query: {
                    post: result.uid
                }
            };
        });

        return paths;
    }
};
