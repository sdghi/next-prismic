export const linkResolver = (doc) => {
    if (doc.link_type === 'blog_post') {
        return `/blog/${doc.uid}`;
    }
    return `/${doc.uid}`;
};
